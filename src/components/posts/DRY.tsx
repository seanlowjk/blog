import React from "react";
import { Button, Card, Alert, Figure } from "react-bootstrap";

function DRY() {
  return (
    <Card className="blog-content">
      <h1> Don't Repeat Yourself (DRY) </h1>
      <br />
      <Alert variant={"warning"}>
        <Alert.Heading>Warning!</Alert.Heading>
        This is more related to software engineering principles covered in
        CS2103/T or CS2113/T. However, this is a good read also for current
        CS2030 students.
      </Alert>

      <h3>Context</h3>
      <p>
        This is a technical retrospective on the decisions made when developing
        different aspects of NodeFlair's product. This is done to hopefully make
        better decisions down the road. In this case, it was NodeFlair's
        revamped onboarding form that is in question, when we were planning for
        a review page.
      </p>

      <h3>Using the DRY Principle</h3>
      <p>
        In Software Engineering, the DRY principle aims at reducing repetition
        of code. Let's say for example, we have the following class Structure:
        We have a class called Animal and we have a class called Dog which is a
        child class of Animal. As we know Dog is-a Animal, it is not really
        necessary to repeat the attributes and methods of Animal into Dog!
        Duplication in logic should be eliminated. It suggests that by copy and
        pasting duplicate logic, the code writer does not have a good
        understanding of how the code comes into play and a poor understanding
        of abstraction. Unnecessary code to a code base results in an
        unnecessary increase in the amount work needed to maintain the code base
        and create additional tests just to handle the presence of these
        duplicate code.
      </p>

      <h3>What did you do?</h3>
      <p>
        For Nodeflair's revamped onboarding form, it did not have a review page
        initially.
      </p>

      <Figure>
        <Figure.Image
          alt="State Machine 1"
          src="https://user-images.githubusercontent.com/42912708/88661223-be408900-d10a-11ea-8efd-2651ede62a69.png"
        />
        <Figure.Caption>
          Figure 1. Original State Machine for Onboarding form.
        </Figure.Caption>
      </Figure>

      <p>
        We can express the original onboarding form logic as a state machines as
        shown in Figure 1.
      </p>

      <Figure>
        <Figure.Image
          alt="State Machine 2"
          src="https://user-images.githubusercontent.com/42912708/88661237-c7315a80-d10a-11ea-9e03-dd21bfd8ede0.png"
        />
        <Figure.Caption>Figure 2. States for Review Page</Figure.Caption>
      </Figure>

      <p>
        As a result, we would need to modify the buttons such that Next should
        not appear, which redirects the yser to the next page. Instead, it's
        replaced by another button Back To Review which returns the user to the
        review page.
      </p>

      <p>
        However, there is an issue that users would not be able to see all their
        details on one entire page. Hence, the need for the review page to
        enhance the user's journey. With the addition of the review page, we can
        have additional states which helps redirect the user to the page which
        the user has components he or she wishes to edit.
      </p>

      <h3>The Mistake</h3>

      <p>
        I had decided to replicate the jsx component for each page into a new
        ppage with a modified BottomComponent with the new button. However, this
        results in a huge amount of repeated code, which is actually
        unnecessary. This would result in quite a bit of overhead and that it is
        not really wise to handle such a practice.
      </p>

      <h3>The Solution</h3>

      <p>
        As a result, we could actually just modify the BottomComponent and
        create a new component called ReviewBottomComponent which handles the
        state logic from Figure 2. As a result, we do not actually need to
        create 4 new pages just to handle the review state logic! It saves time
        and effort while following the principle of not repeating oneself.
      </p>

      <h2> What did you learn?</h2>

      <h3>Planning before you act.</h3>

      <p>
        Do not rush into things. Just because some ways seem faster and more
        convenient, it does not indicate that we should forgo our good software
        engineering practices. In this article, I made the mistake of just
        repeating the code used for all 4 pages and making 4 new pages just for
        the sole purpose of creating a new BottomComponent.
      </p>

      <h3>Child Components and Parent Components.</h3>

      <p>
        As much as possible, if there is already a child component in the parent
        component which handles that particular set of logic, we should make use
        of it as much as possible. In this case, our Page has-a BottomComponent.
        As a result, we can just make use of the BottomComponent and create an
        alternative ReviewBottomComponent to handle the review state logic. If
        our Page does not have a BottomComponent, we should take responsibility
        by abstracting out the code such that we have create a component with
        similar functionality to that of a BottomComponent. From there, we can
        follow what we did in the earlier paragraph.
      </p>

      <h3>Would you do it again?</h3>

      <p>
        Nope. It does not make sense to repeat so much code just for a simple
        purpose. Please do remember to plan before coding!
      </p>

      <Button variant="dark" href="/blog/misc/">
        Back To Posts
      </Button>
    </Card>
  );
}

export default DRY;
