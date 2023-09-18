import os
import openai
from flask import Flask
from flask import request, jsonify, Response

openai.organization = "org-hmLTnmUwpQ26fR7nqDqxWwVq"
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)
# json="Give an answer in json format. The json string should have a key Actionable_Steps with value as json object list. Each object in the list is one step and include the step number, category, tasks, team positions , resources."
# prefix= "Act like a venture coach and mentor and give me actionable steps with points to build my start from scratch which is "
# suffix= " Give an answer in json format and also give me Resources in the Niagara Falls and Buffalo Area. I also need different positions I would need in my team for each step."
prefix = "Act like a venture coach and give me 8 actionable steps in json format which includes the step number, category, multiple elaborated tasks, team positions with job description for each position with required skills, multiple resources that can help at each step like organizations, to help me in each step located around Niagara Falls, Buffalo (provide website links if possible) for my startup. Start up idea is: "

plan_json = None

@app.route('/bplan',methods=['POST'])
def bplan():
    data = request.json 
    prompt = data['prompt']
    print(prompt)     
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {"role": "user", "content": prefix+prompt}
        ]
    )
    plan_json = response['choices'][0]['message']['content']
    print(plan_json)
    response = Response(status=200)
    return response

@app.route('/gbplan',methods=['GET'])
def getbplan():
    if plan_json:
        return jsonify(plan_json)
    else:
        return jsonify("{'error':-1")


 
# # main driver function
# if __name__ == '__main__':
 
#     # run() method of Flask class runs the application
#     # on the local development server.
#     app.run()


# prompt="By 2026, more than 217 million people in the U.S. will use online food delivery services. Tap into that market and start a meal-prep service to make people’s lives easier and cater to specialized diets (keto, vegan, Whole30)."
# prompt="Act like a venture coach and mentor and give me actionable steps and elaborate tasks in each step to launch my startup and also give me multiple resources like organisations, business development centers,  who can help me for each step around Niagara Falls, Buffalo. My idea is \"to sell authentic Kerela banana chips to the world cooked in fresh peanut oil with authentic spices\”."
# prompt_working = "Act like a venture coach and mentor and give me elaborated actionable steps for my startup and also give me resources like organisations, funds, etc. who can help me for each step located around Niagara Falls, Buffalo. Start up idea is \"to sell authentic Kerela banana chips to the world cooked in fresh peanut oil with authentic spices\”. Give an answer in json format and also give me Resources in the Niagara Falls and Buffalo Area. I also need different positions I would need in my team for each step.Give an answer in json format which includes the step number, category, tasks, team positions, resources (provide website links if possible)."
# prefix = "Act like a venture coach and mentor and give me elaborated actionable 8 steps to launch my startup from zero to one and also give me resources like organisations, funds, etc. who can help me for each step located around Niagara Falls, Buffalo. Start up idea is to "
# suffix = "Give an answer in json format and also give me Resources in the Niagara Falls and Buffalo Area. I also need different positions I would need in my team for each step.Give an answer in json format which includes the step number, category, tasks, team positions, resources (provide website links if possible)."
#  print(prefix+prompt+suffix+json)
# multiple elaborated tasks, team positions, resources like organizations, funds to help me in each step located around Niagara Falls, Buffalo (provide website links if possible) for my startup. Start up idea is to sell authentic Kerela banana chips to the world cooked in fresh peanut oil with authentic spices. Give an answer in json format and also give me resources including startup incubators and funding in the Niagara Falls and Buffalo Area.
# prompt = "Act like a venture coach and give me 8 actionable steps in json format which includes the step number, category, "

prompt = "Implement blockchain technology to enhance transparency and traceability in supply chains. Your startup can create a platform that helps companies track the movement of goods from manufacturers to consumers, ensuring authenticity and reducing the risk of counterfeit products. Blockchain can also streamline transactions and reduce fraud. "
# prefix_final = "Act like a venture coach and give me 8 actionable steps in json format which includes the step number, category, multiple elaborated tasks, team positions, resources like organizations, funds to help me in each step located around Niagara Falls, Buffalo (provide website links if possible) for my startup. Start up idea is to "
# prompt = "By 2026, more than 217 million people in the U.S. will use online food delivery services. Tap into that market and start a meal-prep service to make people’s lives easier and cater to specialized diets (keto, vegan, Whole30)."


response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {"role": "user", "content": prefix+prompt}
        ]
    )
print(response['choices'][0]['message']['content'])