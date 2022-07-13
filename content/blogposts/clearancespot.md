If so, you are in the right place and we have something to offer for you. Clearance Spot is our product and as described, it has to offer you products from multiple retailers (Walmart, Hanes, JCPenney and others) that are on sale and point you to the retailer where you can checkout them and the best part - you gotta search for them only on one website. Isn’t that cool?

## So, how do we manage all of that you might ask yourself?

Well, as retailers don’t have or have limited API points, we figured it’s time to crawl them the old fashioned way. If you are not familiar with the term ‘web crawling’, it is a program designed to fetch data from another website or source, process the data and do whatever you think is smart with it. In our case, we used Node.js and its well known library called puppeteer with puppeteer-extra wrapper for stuff like ad blocking and better concealment of crawlers. Basically we made one crawler for each retailer which can easily be multiplied if needed.

## What about the front-end and back-end of the app?

We used React/Next.js for the looks and PHP as our own API endpoints. Thanks to Next.js server-side rendering possibilities, SEO optimization was a piece of cake as React lacks tools for it. Considering it is made in React, we are talking about a single-page application that provides easy-to-use and friendly UX. Even though the whole app is focused on one page (home page) and products, you can also create user accounts which provide saving user preferences like filtering retailers and others. If you feel like sharing a product with friends you found through Clearance Spot, you can do it by simply clicking little share icons at the bottom of every product card. About the back-end part, there isn’t much to say - it contains several API routes for our app which gets the products you see. More about it in the diagram below.

## This sounds so easy, but was it really that way?

As said, we used custom made crawlers opposed to API calls. You might figure it out by now that crawlers are not wanted on the web because they don’t represent real users and they create extra traffic which is not something you would want on your webpage. So how do you deal with them? There are multiple solutions you could use, but the most common one is implementing captcha on your website. At this point, our crawlers might be blocked as today's captchas (like reCAPTCHA) require human interaction and brain to complete them, but not everything is so gray. If we are talking about captchas that are solvable by 2captcha service, there is a simple puppeteer plugin that will do the job for us if we provide a valid API key. But as mentioned before, there are multiple captcha solutions and some of them require custom bypass that simulates user movement and behaviour. But we will leave that for another time.
Beside captcha problem, there were some other blocking techniques as crawlers are static and don’t change properties as such. If you think about it, a lot of requests in a short time, with simple page switching ain’t so human behavior, but luckily for us, randomizing puppeteer properties every now and then and using proxy does the job.

## What is a manager and what does it do?

Besides our crawlers, front-end and back-end, there is a custom program we use for monitoring data and efficiency of our crawlers and we call it - well you guessed, manager. The main purpose of a manager is monitoring, but there is much more going on. For example, we use a manager for deploying our crawlers all at once which can be trickful if you do it one by one when you have more than a dozen crawlers. Moreover, we use a manager as a cron job (program called every few minutes) for clearing old products which may be out of stock. Manager as well as have an internal webpage which shows us current state of crawlers that comes in handy where some of them block or have any problems. Alongside the manager, there is a custom made Telegram bot that sends messages if any of mentioned crawlers are out of work for various reasons which make our bots even more efficient and running successfully 99% of the time.

## What’s the process of the whole project?

Mentioned above, first we crawl products with custom algorithms from various retailers and save that data to the database. Occasionally, at the same time when a user accesses a website and sends a request to API, API contacts database and retrieves data that user requested including params like product name, retailer list, discount and more. At the very end, our API returns data to Next.js app and shows them on screen. Pretty simple, huh? More detailed look at the whole process can be seen at the diagram below.

#### /gallery/blog/0/clearancespot.jpg

## Conclusion

To sum it all up, Clearance Spot is a website we find very useful as it provides a list of products from multiple retailers at one place so your shopping can be even faster and more efficient, plus you’re gonna save some pennies :).
