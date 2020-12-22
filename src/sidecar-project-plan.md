# CLI Project Planning

## Introduction


## How to Get Started On a Successful Project Build

1. The next lesson includes the project requirements for this project. Read through the 
   requirements carefully before getting started. 

2. 


    a. What will your app do? What is the user experience?
    b. Where will get your data from? 
    c. How will the data be used?
    d. What classes will you be using?
    e. How will you display data one level deep to the user?

3. Create a skeleton app and repository on Github.
   

4. Plan your schedule. Note that it takes most full time (40+ hrs/week) students
   between 3-7 days to complete.

5. 


### Making a User Story

- Who is your User?
- What is their pain point?
- How do they use our solution to overcome this problem?

> **Example:** Gemma has dietary requirements which means that she can’t eat
> gluten or dairy. Her friends have invited her to dinner at the most excellent
> pizzeria Zozo. Her WiFi connection is a bit patchy and the graphic-heavy Zozo
> website is not loading - all she wants is to know what allergens are in the
> dishes! Now she can use the Zozo Menu CLI App:
>
> - She starts the app and is greeted with a list of dishes on the Zozo menu
> - She chooses a dish and is shown the allergens in that dish
> - She can then either go back to the list and choose another dish or exit the app

### Choosing Your Classes

- If this was a human-run business, what roles would I be hiring?
- What responsibilities would they have?

Let’s take the Zozo Menu CLI App we’re building for Gemma. If this was a
human-run service we may need:

A customer service specialist:

- Responsible for asking Gemma questions and delivering her the answers.

An in-house expert on each of the MenuItems

- Responsible for holding the information the runner has gone out to get. Our
    runner will complain if we ask them to go and get info they already
    retrieved!

A ‘runner’:

- Responsible for going out into the world and getting data from the Zozo
    website when our in-house expert needs to know.

In the Zozo app, these might be called CLI, MenuItem, Scraper.

### Making an app flow diagram

- How is data passed around your app?
- What classes are used? What are their responsibilities?
- How can I avoid unnecessary duplication of actions?

We recommend using [draw.io][] to put together a flow diagram. It doesn’t need to be
over-complicated  - just a visual idea of your app’s structure.

[Here is an example][draw.io example] of a flow for our Zozo Menu CLI App:

![draw.io example flowchart](https://curriculum-content.s3.amazonaws.com/project-planning/draw%20io%20example%20flowchart.png)

If your data requires two steps to get all the details, your chart could look more [like this][draw.io example 2]:

![draw.io example flowchart 2](https://curriculum-content.s3.amazonaws.com/project-planning/draw%20io%20example%20flowchart%20two.png)

You don’t have to use software for this - a photo of a (legible) hand-drawn
sketch on a napkin also works! The symbols used in the examples above follow
basic flowchart conventions. If you’re interested in learning more, here is a
great [overview][flowchart overview].

Please make sure the image or file you share with us is accessible. This gif
shows how to make a shareable link on draw.io:

![make shareable draw.io gif](https://curriculum-content.s3.amazonaws.com/project-planning/shareable%20link.gif)

### Handy Tools

[Requirements Checklist][requirements]

[Scraper Checker][Scraper Checker tool]

[draw.io][]

### Demo Projects

[Eden Events](https://www.google.com/url?q=https://github.com/Gingertonic/eden_events&sa=D&ust=1578950690621000) - CLI app with object relationships. Uses Nokogiri for scraping data.

[London Spas](https://www.google.com/url?q=https://github.com/Gingertonic/london-spas-cli&sa=D&ust=1578950690622000) - CLI app, no object relationships. Uses HTTParty for API calls.

[Current Movies](https://www.google.com/url?q=https://github.com/Gingertonic/movie-js-site-scraper-demo&sa=D&ust=1578950690622000) - CLI app, no object relationships. Uses Watir for scraping JS-loading data.

- (Watir will NOT work in the Learn IDE - only use this if you are working in a local environment and are ready for some potential setup headaches!)

### Videos

Building a CLI to show What's On at the Eden Project:

- [Eden Project Part 1][]
- [Eden Project Part 2][]
- [Eden Project Part 3][]


[Eden Project Part 1]: https://www.google.com/url?q=https://www.youtube.com/watch?v%3DKwBMwZ89Hj8%26list%3DPLc6AmvC5Zybybc-NjUUwQwTtUEXH4iB2s%26index%3D2%26t%3D0s&sa=D&ust=1578950690624000

[Eden Project Part 2]: https://www.youtube.com/watch?v=TaRZ9Z8dK2s&list=PLc6AmvC5Zybybc-NjUUwQwTtUEXH4iB2s&index=4

[Eden Project Part 3]: https://www.youtube.com/watch?v=VMAW3VjPUPw&list=PLc6AmvC5Zybybc-NjUUwQwTtUEXH4iB2s&index=5

[flowchart overview]: https://www.gliffy.com/blog/how-to-flowchart-basic-symbols-part-1-of-3

[draw.io example]: https://drive.google.com/file/d/1YMbNfo91rfVzsdi3kbMMbyDct2hYwlKy/view?usp=sharing

[draw.io example 2]: https://www.google.com/url?q=https://drive.google.com/file/d/1rdwPBxVaSUuXsLE-zGjyYOHc4lNvX3h3/view?usp%3Dsharing&sa=D&ust=1578950690616000

[draw.io]: https://www.draw.io/

[study groups]: https://learn.co/study-groups

[Scraper Checker tool]: https://repl.it/@TheGingertonic/ScraperChecker

[build]: https://www.youtube.com/watch?v=KwBMwZ89Hj8&list=PLc6AmvC5Zybybc-NjUUwQwTtUEXH4iB2s&index=2&t=0s
[requirements]: https://github.com/learn-co-curriculum/cli-data-gem-assessment


