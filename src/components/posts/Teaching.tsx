import React from "react";
import { Button, Card, Figure } from "react-bootstrap";

function Teaching() {
  return (
    <Card className="blog-content">
      <h1> My Teaching Career in NUS </h1>
      <br />

      <h3>My Teaching Experiences</h3>
      <p>
        Looking throughout my teaching journey in NUS, I have been part-time
        teaching in the School of Computing (SoC) for 2.5 years. 
        <br></br>
        I have taught the following modules in NUS: 
        <br></br>
        - CS1101S Programming Methodology<br></br>
        - CS2030/S Programming Methodology II<br></br>
        - CS2102 Database Systems 
      </p>

      <h3>Common Misconceptions</h3>
      <p>
        1. Prior to contrary belief, you do not need a super-duper grade to teach 
        in SoC. I have scored an average of A- for the 3 above modules. 
        <br></br>
        2. You do not need to be a know-it-all kind of person. It is okay to not 
        know how to answer certain questions during class. However, you should take
        the responsibility to get back to them on these unanswered questions that 
        you are not sure of. 
        <br></br>
        3. DO NOT <b>SPOONFEED</b>. By providing answers, it doesn't really prove that
        your students will understand. Go through the thought process and, explain
        in layman terms if needed. 
      </p>

      <h3>How I deal with Online Classes</h3>
      <p>
        During the past few semesters, most lessons had to be mounted online
        via Zoom due to the COVID-19 Situation. As a result, things must be 
        done different. <br></br>

        1. I usually do not force people to turn on their cameras despite there being 
        class participation. This is because tutorial lessons are meant to be a safe 
        space for interaction and I do my best to try to keep things as comfortable 
        as possible. <br></br>
        2. Using Zoom Annotations. One good thing that I found while student was 
        presenting was to use Annotations to <b>direct the attention</b> of students
        to the important parts which were needed.  <br></br>
      <Figure>
        <Figure.Image
          alt="Annotations"
          src="https://user-images.githubusercontent.com/42912708/147327032-899c530b-e6a1-46ce-aa19-f4053bb2ca82.png"
        />
        <Figure.Caption>
          Figure 1. Zoom Annotations used during Class Participation
        </Figure.Caption>
      </Figure>
      </p>

      <h3>Dealing with Classes in General</h3>
      <p>
        1. Recap the content beforehand. Usually, it would be good to tie in the 
        learning objectives from the previous lecture with the current tutorial / lab 
        lesson such that it becomes more relatable, and at the same time, help to 
        clarify questions before the tutorial or lab.  <br></br>
        2. Being approachable is <b>super important</b> as it helps with interacting with 
        your students. Turn on your camera even though your students might not. 
        Try to get to know each other before the class starts, do some chit-chat and 
        understand if they have any issues with the lessons thus far. This brings me 
        to my next point. <br></br>
        3. Staying contactable. By this, I <b>DO NOT</b> mean being online for your students
        24/7. After all, you are a student as well and must manage your own modules. 
        What I mean by this is to create a chat group so that the tutorial group can 
        ask and discuss about queries about the module. Not only do you have the chance 
        to understand the areas in which some of your students might be struggling in, 
        but also give another avenue for interaction to take place. 
      </p>

      <h3>The Good</h3>
      <p>
        Well, there were plenty of great feedback from my students from the past few 
        years. I would like to point out some of these comments to elaborate on the 
        points which I have mentioned earlier. 

        <Figure>
        <Figure.Image
          alt="Feedback-1"
          src="https://user-images.githubusercontent.com/42912708/147327217-fadf9ef2-d384-4d02-bb2d-c77df10967e0.png"
        />
      </Figure>

        As I mentioned, one important factor is <b>to be approachable.</b> If you 
        are willing and able to listen, naturally, you would be able to build somewhat good
        camaraderie with your students. 

        <Figure>
        <Figure.Image
          alt="Feedback-2"
          src="https://user-images.githubusercontent.com/42912708/147327224-7385a13d-c625-49f3-b0a3-ae46799ed64f.png"
        />
      </Figure>

        As mentioned, do take the opportunity to talk with your students and get to know 
        them. Do your best to ensure that your students take something away from the lesson 
        and if not, do approach them if needed. After all, your students are the spotlight 
        for your teaching stint. 
      </p>

      <h3>The Not-So-Good</h3>
      <p>
        Mainly it has to do with speaking speed. It will be good to stand in front of a mirror
        and observe how you speak and present. Unfortunately, I usually tend to speak too fast 
        which is a downside. 
      </p>

      <h3>Teaching Feedback</h3>
      <p>
        <Figure>
            <Figure.Image
            alt="Teaching-Feedback-CAP"
            src="https://user-images.githubusercontent.com/42912708/147327411-def7aa64-57b7-460c-bca2-b8f977e9de17.png"
            />
            <Figure.Caption>
            Figure 2. Teaching Feedback Rating
            </Figure.Caption>
        </Figure>

        Over the past 5 semesters, I have generally received positive feedback. What I want to say
        is that if you put in the effort to understand your students and establish good 
        camaraderie with your students, you can make a good impact on them and, make new friends
        along the way as well. 
      </p>

      <h3>Concluding Thoughts</h3>
      <p>
        For those that wish to apply as a teaching assistant in SoC, do know that it is not going to 
        be an easy journey as it can be a time-sink. Do more than the minimum, and you'll
        be amazed at the impact that you can leave on your students. 
      </p>

      <p>
          Thank you for reading and have a great day! <br></br>
      </p>

      <Button variant="dark" href="/blog/#/misc/">
        Back To Posts
      </Button>
    </Card>
  );
}

export default Teaching;
