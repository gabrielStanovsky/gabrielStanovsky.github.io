import json,sys,os
from bottle import route, run, request, response

@route('/save', method='POST')
def save():
    #filename = request.forms.get("filename")
    #print filename
	
	postdata = request.body.read()
	j = json.loads(postdata)
	
	if "filename" not in j:
		print "no"
	else:
		print j['filename']
	print j
	filename = j['filename']
	#f = open("./save/"+filename,'w')
	f = open(filename,'w')
	f.write(json.dumps(j['data']))
	f.close()
	print postdata #this goes to log file only, not to client
	print "saved to file {0}".format(filename)

os.chdir(sys.argv[1])
run(host='localhost', port=8070)

