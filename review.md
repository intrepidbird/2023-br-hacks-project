# BRHS Hackathon Review

# Who am I?

I am a 8th grade student at BRMS (Bridgewater-Raritan Middle School), going into BRHS (Bridgewater-Raritan High School).

# BRHacks

I recently had the opportunity to attend the BR Hackathon, a 24-hour hackathon for high school and middle school students held at Bridgewater Raritan High School. As a middle school student, I was excited to compete against older students and learn from the best minds in the area.

I arrived at BRHS on Sunday morning and was immediately impressed by the energy and excitement in the room. There were over 200 students competing, and everyone was eager to get started. We were randomly assigned to teams, and I was fortunate to be placed with a group of talented and experienced students.

We spent the next 24 hours working on our hackathon project. We decided to build a website that uses AI to help students find the perfect college for them. We used a variety of technologies, including Python, Flask, and Machine Learning, to create our website.

At the end of the 24 hours, we presented our project to a panel of judges. We were nervous, but we were also confident in our work. The judges were impressed with our project, and we were awarded the AI and Machine Learning Prize.

In addition to the individual prizes, our team also won the CS General Knowledge 3rd place and the C++ Champion prize. We were thrilled with our results, and we were proud of all the hard work we had put into our project.

In addition to the competition, BR Hackathon also offered a variety of workshops and talks. I attended the Java, C++, Data Visualization, AI and Machine Learning, GitHub, and Game Development workshops. I learned a lot from these workshops, and I was able to apply what I learned to my hackathon project.

Overall, I had a fantastic time at BR Hackathon. It was a great opportunity to learn from other students, compete against the best minds in the area, and build something cool. I would highly recommend BR Hackathon to any student who is interested in computer science or technology.

## Out project

My team of 6 had to be split up into two teams. We made a AI Toolbox with NextJS and Vercel, and the code can be found [here](https://github.com/sr5434/intrepidai).

The other team we made also made a monkeytype reference, and the code is below

```python
import datetime
import time
import random




# prompts
prompts = ["day down with give only open about we only give",
           "most house as turn have many might run will the",
          "give now ask here look plan could of more out",
          "high change as should people turn could by same old",
          "it end much some show other right word from world"]


# begin

# add prompt to type here
prompt = random.choice(prompts)
print(prompt)
start = input("Are you ready to begin? Type y when ready.")

starttime = time.time()
lasttime = starttime
# timer
if start == 'y':
  typing = input("Type prompt: ")
  while typing != prompt:
    # Total time elapsed since the timer started
    totaltime = round((time.time() - starttime), 2)
    print("Total Time: "+str(totaltime))
```

We also had a `uwu API`, which I personally loved, the code is

```python
import openai

class Uwuifier:
    def __init__(self):
        self.replacements = {
            'r': 'w',
            'l': 'w',
            'R': 'W',
            'L': 'W',
        }

    def uwuify(self, message):
        return "".join(self.replacements.get(c, c) for c in message)

class UwuBot:
    def __init__(self, openai_key):
        self.uwuifier = Uwuifier()
        openai.api_key = openai_key

    def respond(self, message):
        response = openai.Completion.create(
          engine="text-davinci-002",
          prompt=message,
          max_tokens=100
        )
        return self.uwuifier.uwuify(response.choices[0].text.strip())

def main():
    bot = UwuBot('openai-key')
    while True:
        message = input("Enter your message: ")
        if message.lower() == "quit":
            break
        print(bot.respond(message))

if __name__ == "__main__":
    main()
```

## What I really liked about BRHacks

Here are some of the things that I liked most about BR Hackathon:

- The competition was challenging but fair.

- The workshops were informative and engaging.

- The judges were knowledgeable and supportive.

- The overall atmosphere was fun and collaborative.

## Conclusion

I would definitely recommend BR Hackathon to any middle school or high school student who is interested in computer science or technology. It is a great opportunity to learn from other students, compete against the best minds in the area, and build something cool.
