# -*- coding: utf-8 -*-

from flask import Blueprint, render_template, request
from ...web.auth.auth_utils import service_util

blueprint = Blueprint('public', __name__, static_folder='../static')


@blueprint.route('/', methods=['GET'])
def home():
    return render_template('landingpage/index.html')


@blueprint.route('/privacy', methods=['GET'])
def privacy():
    return render_template('landingpage/privacy.html')


@blueprint.route('/services', methods=['GET'])
def services():
    return render_template('landingpage/services.html')


@blueprint.route('/service', methods=['GET'])
def service():
    return render_template('landingpage/single-service.html')


@blueprint.route('/plan', methods=['GET'])
def plan():
    plan_name = request.args.get('plan')
    #@Todo: Rename to plan_util. Its actually plan not service but I havent created that yet
    plan = service_util.get_by_name(plan_name)
    return render_template('landingpage/single-service.html', plan)


@blueprint.route('/hospital', methods=['GET'])
def hospital():
    return render_template('landingpage/single-hospital.html')


@blueprint.route('/request-demo', methods=['GET'])
def demoRequest():
    return render_template('landingpage/demo.html')
