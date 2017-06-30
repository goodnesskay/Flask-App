from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return render_template('landingpage/index.html')


@app.route('/bot', methods=['GET'])
def bot():
    return render_template('landingpage/bot.html')


@app.route('/privacy', methods=['GET'])
def privacy():
    return render_template('landingpage/privacy.html')


@app.route('/services', methods=['GET'])
def services():
    return render_template('landingpage/services.html')


@app.route('/service', methods=['GET'])
def service():
    return render_template('landingpage/single-service.html')


# @app.route('/plan', methods=['GET'])
# def plan():
#     plan_name = request.args.get('plan')
#     #@Todo: Rename to plan_util. Its actually plan not service but I havent created that yet
#     plan = service_util.get_by_name(plan_name)
#     return render_template('landingpage/single-service.html', plan)


@app.route('/hospital', methods=['GET'])
def hospital():
    return render_template('landingpage/single-hospital.html')


@app.route('/request-demo', methods=['GET'])
def demoRequest():
    return render_template('landingpage/demo.html')


if __name__ == '__main__':
    app.run()
