""" Usage:
    <file-name> [--in=INPUT_FILE] [--out=OUTPUT_FILE] [--debug]

Options:
  --help                           Show this message and exit
  -i INPUT_FILE --in=INPUT_FILE    Input file
                                   [default: infile.tmp]
  -o INPUT_FILE --out=OUTPUT_FILE  Input file
                                   [default: outfile.tmp]
  --debug                          Whether to debug
"""
# External imports
import logging
import pdb
from pprint import pprint
from pprint import pformat
from docopt import docopt
from pathlib import Path
from tqdm import tqdm
from glob import glob
import json

# Local imports


#----

HTML_STRING = r'<a href="{xwlp}" target="xwlp" onclick=change_brat("{svg}")>{name}</a> <br />'


if __name__ == "__main__":

    # Parse command line arguments
    args = docopt(__doc__)
    inp_fn = Path(args["--in"])
    out_fn = Path(args["--out"])

    # Determine logging level
    debug = args["--debug"]
    if debug:
        logging.basicConfig(level = logging.DEBUG)
    else:
        logging.basicConfig(level = logging.INFO)

    logging.info(f"Input file: {inp_fn}, Output file: {out_fn}.")

    # Start computation
    svgs = [Path(svg) for svg in glob(f"{inp_fn}/brat/*.svg")]
    svgs = sorted(svgs, key = lambda svg: int(svg.stem.split("_")[1]))
    with open(out_fn, "w", encoding = "utf8") as fout:
        for svg in tqdm(svgs):
            name = svg.stem
            proto_num = name.split("_")[1]
            xwlp_paths = glob(f"{inp_fn}/xwlp-htmls/*_{proto_num}.html")
            assert len(xwlp_paths) == 1, f"more/less than one path {proto_num}, {xwlp_paths}"
            xwlp = xwlp_paths[0]
            fout.write(HTML_STRING.format(xwlp = xwlp, svg = svg, name = name) + "\n")
    
    # End
    logging.info("DONE")
