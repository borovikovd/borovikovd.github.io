---
layout: post
title: "Code reviews best practices"
date:   "March 19, 2024"
summary: A survival guide
categories: ["programming"]
---

# First of all - why?

Diving into the "why" of code reviews reveals three critical benefits:

* Improve code quality: Code reviews rigorously scrutinize code for potential improvements, ensuring adherence to best practices and design principles. This process inherently raises the code's caliber.
* Share knowledge: They act as a conduit for knowledge transfer, allowing developers to learn from one another. This collaborative environment not only enhances individual skill sets but also harmonizes team methodologies.
* Prevent bugs: Early detection of issues during the review phase significantly reduces the incidence of bugs in later stages. This proactive approach saves time and resources, streamlining project development.

In essence, code reviews serve as a foundational practice that uplifts the team's coding standards, fosters a learning culture, and minimizes errors, making them an indispensable part of the development process.

# Code review issues and tactics to address them

## Issue #1 - review intent

Let's dive into Issue #1 - Review Intent: What's our goal with code reviews?

* Aiming for perfect code is like chasing a mirage. It's an admirable goal but ultimately unattainable and can distract us from making practical progress.
* Setting a minimal quality bar doesn't push us forward. It ensures basic functionality but misses the opportunity for growth and excellence.
* The sweet spot is making the code better. This approach is realistic and focuses on incremental improvements, which is what drives real progress in software development.


The key takeaway? Code reviews should aim for continuous improvement. This mindset fosters a culture of excellence, encouraging developers to elevate the code in meaningful ways, without the pressure of perfection or the complacency of just meeting standards. It's about finding the right balance that propels us forward.

## Issue #2 - what to look for

It's not just about eyeballing lines of code; it's about delving into the essence of what makes good code great. Here’s a roadmap:

* Functionality: Is the code doing what it's supposed to do? It's the bedrock of any review, ensuring the application behaves as intended.
* Tests: They're the safety net. Adequate testing means we can sleep a little easier, knowing changes won’t send everything crashing down.
* Design: This is about the architecture of your code. Good design ensures that your code is not just a house of cards ready to tumble at the slightest breeze.
* Style: Consistency is key. A unified coding style makes the code more readable and maintainable for everyone on the team.
* Docs: Often overlooked but vitally important. Documentation ensures that future you—or anyone else—won't be cursing past you when trying to figure out how things work.

In essence, a thorough code review goes beyond mere functionality. It encompasses a holistic look at the code's health, from its foundational logic to the polish of documentation, ensuring everything is in top form for the long haul.

## Issue #3 - resolving comments

Navigating through feedback in code reviews is crucial for progress. Here's how to tackle it effectively:

* Ask a question: If a comment isn't clear, don't guess. Asking clarifies expectations and prevents unnecessary rework.
* Resolve a comment by making code changes: The most straightforward response to feedback. If a comment makes sense, update the code accordingly.
* Write “won’t fix”: Sometimes, it's okay to push back, but be clear about your reasons. This transparency helps maintain a constructive dialogue.
* Don’t leave unresolved comments: Leaving comments hanging can lead to confusion and technical debt. Aim for a clean slate before merging.
* If the thread is too long - have a meeting: Sometimes, written communication just doesn’t cut it. If a thread becomes a novella, it's time for a direct chat.

Effective comment resolution is all about communication. Whether it’s through asking questions, making changes, or even agreeing to disagree, the goal is to ensure that both code and team relationships are stronger at the end of the review process.

## Issue #4 - debating

Debating during code reviews with a few guiding principles can streamline the process and minimize friction:

* Facts and data overrule opinions: When it comes to making decisions, objective data and factual evidence should take precedence over personal preferences. This approach ensures decisions are defensible and grounded in reality.
* Style is conventional: Style choices often boil down to agreed-upon conventions within a team or project. While subjective, these conventions are important for maintaining consistency and readability across the codebase.
* Design is based on principles: Design discussions straddle the line between objectivity and subjectivity. They are guided by established principles, yet there's room for interpretation based on the specific context of a project.

When commenting during a review, clarity is key. Be explicit about the nature of your feedback—is it a factual correction, a suggestion to adhere to a style convention, or a discussion about a design principle? This clarity not only helps streamline the review process but also enriches the dialogue by making the intent of each comment unmistakable.

# Conclusion


Concluding, mastering code reviews is about striking a balance between rigor and flexibility, aiming not just for cleaner code but for a stronger, more agile development culture. It's a practice rooted in respect—respect for the code, the process, and, importantly, each other. Remember, the goal is continuous improvement, fostering an environment where feedback is not just tolerated but welcomed as a catalyst for growth. Let’s champion code reviews as a cornerstone of software excellence, embracing each review as an opportunity to refine our craft and elevate our teams. Here's to building better software, together.
