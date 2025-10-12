---
title: "How to fit UI/UX into Scrum"
date: 2022-04-12T00:00:00Z
summary: " - But we need designs!" © Frontend Developers
categories: ["scrum", "ui/ux"]
---

# Why is it hard?

“ - But we need designs!” © Frontend Developers

Ideally, the Scrum process works like this: we have a nice and shiny product backlog, and every 2 weeks or so the team meets to select new items for the next sprint and agree on tasks that are needed to deliver those items. At the end of the sprint, we have a new increment of software. Sounds simple, right? But when it comes to projects that involve a significant amount of UI/UX design, you might face some challenges. Let's talk about some of them.

## Frontend engineers might not accept a story without designs
Well, they can of course accept a story defined as a few words on a sticky note. But estimating this item can be difficult. Frontend folks quite often think in terms of components they need to implement. Without design, it's hard to know what components they need to implement. Sure, I'm not saying it's the only way to estimate items. In fact, being able to estimate based on minimal information without design is a good skill. But I'm pretty sure you might get this pushback from the frontend team in the form of "yeah, we can estimate it without designs, but you know, it's super rough and the story can mean anything depending on the specific designs".

## Multi-disciplinary work is hard to fit into one Sprint
Remember our ideal process? We take items one by one from the backlog and show an increment after a fixed interval of time. Sounds good, but we somehow have to ensure that we're actually completing our work during sprints. Yeah, a lot of people think that accomplishing a sprint is the same as delivering the scope of stories we planned. In fact, it's a bit more relaxed: Scrum requires us to achieve a Sprint Goal. It allows some flexibility in the scope of stories. The problem is that if you have absolutely no idea about estimates, it's impossible to commit to achieving a Sprint Goal. This is why we have all these estimation techniques like story points and T-shirt sizes. Let me tell you an ugly truth: if you need multiple specialties to finish the work, the estimation becomes super unreliable. Just predicting how long coding will take is hard. Add design to this picture and hitting your Sprint Goal becomes a challenge.

## Designers don't like Scrum
The way designers are taught to work is typically quite different from Scrum. Their typical process looks like this:

![Lean UX](/lean_ux.png)
*[Image source](https://uxplanet.org/lean-ux-how-to-get-started-bb3771697e2)*

A few observations here. The UX process is typically multi-stage and tends to be lengthy. Software engineers are trained to work in 2-week sprints or even shorter. Creative folks treat their work as exploratory R&D activity without fixed deliverables defined in the beginning. Well, the software process is quite similar. The problem is that it's similar, but ultimately not the same type of activity. The periodicity of development and design work is unlikely to match. There were attempts to synchronize. It can work, but bear in mind sometimes we're talking about 2 different activities.

# But why bother with Scrum?
At this point, you might think, ok, if we see all these problems trying to fit design activities into our Scrum process, maybe we shouldn't be using Scrum? I still believe that the overall idea of fixed-sprint delivery is a good one. I can see two reasons:
Shorter iterations are good because they reduce risk.
Fixed interval delivery reduces complexity. Instead of endless synchronization meetings, you have fixed scrum events.

Even the authors of Scrum admit that "it's hard to implement". But all these difficulties are signs of underlying problems - Scrum just highlights them. The main question is "can you develop a shippable increment within some reasonable timebox?" If not, it means you have problems with transparency and adaptability.

# Possible solutions
As we discussed before, fitting design into Scrum is challenging, so there's no one universal solution. However, I've seen several approaches that were effective when used in the right context. Let's look at them starting from the most lightweight.

## Designs done by Engineers
Developers should not be designers! This is what some fundamental books like The Inmates Are Running the Asylum by Alan Cooper teach us. But it's not a rule of nature and just one of those beliefs like "developers are bad testers". Well, some are. But it doesn't mean you can't build a culture of product-oriented developers. Another thing is why did you initially decide to use Scrum as your process? Well, perhaps because your project is new and innovative if you know what you're doing :) These projects with high uncertainty benefit from iterative processes like Scrum. If that's the case, you should think about whether you actually need a heavy design process at this stage. For a new project, you can eliminate design as a separate activity completely. It's not 1998 and we have things like design systems and component libraries. The only participation you need from a dedicated design team is to help create a design system. Specific feature designs can be done by engineers. Optionally, designers can consult engineers and give them feedback. Perhaps this is the most Agile and fast way to build complex interfaces. If you've started a startup company, this approach is something you should definitely consider.

## Asynchronous Design
Imagine you started with developer-made design and created the first MVP of your product. By analyzing usage data from real users, you'll likely find bottlenecks in your product. Perhaps it's a good time to invest in more systematic design. I wouldn't spend much time on design activities during the MVP stage, but the post-MVP situation is different. You might face the first problems of growth, and many of these problems can be addressed by proper UX. The idea here is that you involve designers when the product has already been launched. So the designers can do user research, create prototypes, and test with real users. All these activities can be done independently from the delivery of the software, and this is why I call it asynchronous design.

## Discovery Track
There are situations when it's not acceptable to create designs by developers. Developers might just be against it. Another situation is an existing product with a big user base. While an MVP can be scrappy, existing products should have a different quality bar. In these situations, you actually need to have a dedicated design activity and think about how to fit it into the Sprint. From Scrum's point of view, design can be considered as spike activities. Spikes are research items that are needed to make Stories ready (in terms of "definition of ready"). So when you see that a story requires designs to be finished, you create a corresponding Spike item. Only when a spike is ready can you mark your original item as "ready" (for instance, during your Sprint Refinement activity). As you can see, some work happens "in advance" to unblock future sprints. This is what we call a discovery track. The main challenge for this approach is to plan 2-3 sprints in advance, so you have a good idea of what items can be taken into the next sprint and what items you need designs for.

## Optimization
It can be quite dangerous to require a ready design for all your stories. Even though "dual-track Agile" is becoming very popular, you should be aware that it can make your Scrum process look a lot like Waterfall. Design should not be done in isolation in a functional silo and thrown over the fence to developers. You should at least try to involve engineers in the design process. Another approach is to practice in-sprint design. In that case, developers might accept some stories without designs or with partial designs and work collaboratively with designers during the sprint.

# Conclusion
As we can see, there's no silver bullet. Product development is hard and the process tends to be messy. Having spoken with a number of people from different product companies, it seems that there's no simple one-size-fits-all approach to the product development process. A real project will likely involve a combination of tactics I listed in this article. Also, it's important to be adaptive and able to quickly figure out your team's current needs and bottlenecks. 
