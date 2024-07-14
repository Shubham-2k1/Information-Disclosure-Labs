from flask import Flask, render_template,jsonify, request
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

users = {
    "Admin": "Admin"
}

#Main
@app.route('/')
def index():
   return render_template('index.html')

#Lab.html
@app.route('/lab', methods=['GET'])
def lab():
   return render_template('lab.html')

#Dev.html
@app.route('/dev', methods=['GET'])
def dev():
   return render_template('dev.html')

#Admin.html
@app.route('/admin', methods=['GET'])
def admin():
   return render_template('admin.html')

#Verify Flag 1
@app.route('/verify-flag1')
def verify_flag1():
    flag = os.getenv('FLAG1')
    return jsonify({'flag': flag})
 
#Verify Flag 3
@app.route('/verify-flag3')
def verify_flag2():
    flag = os.getenv('FLAG3')
    return jsonify({'flag': flag})
 
#Get Flag 1
@app.route('/get-flag1', methods=['POST'])
def get_flag1():
    username = request.form.get('username')
    password = request.form.get('password')

    if username in users and users[username] == password:
        flag = os.getenv('FLAG1')
        return jsonify({'flag': flag})
    else:
        return jsonify({'error': 'Unauthorized access'}), 401
    
if __name__ == '__main__':
    app.run(debug=True)