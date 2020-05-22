**ANDRE SARAMAGO CV**

This project is an online CV for someone who works IT but in an area that doesn't work with the kind of projects that could be possible to put in a portfolio. Either way, we've 
(me and Andre - the guy on the resume) thought that this could be a good way to stand out from other professionals in the same IT area and help him with his current goal of changing jobs.

I wanted to do something with a clean, modern and simple look, not too much out of the box but different enough from the other virtualization professionals. This description was given to me
by Andre when he explain to me what he needed in an online CV. He says this is the description of this particular IT area (and from what I could gather from my research, I agree) so I wanted to
match it.

For this second phase of the project, I've added some interactivity, allowing the user to access (or not) the information that he/she wants to access amongst what's available in each page. A map showing
the places where André worked is also available with some info about each company. This allows the user to have a general overview of his international experience that he considers a plus. Also, the 
possibility of sending an email directly from the website through a form, contributes to make the first approach easier and more direct.


**UX**

I believe the website is intuitive and easy to navigate. Has the necessary information for a first assesment but doesn't have too much information where the visitor/recruiter/user could lose him/herself 
but the option to dowload the complete and more traditional version of the CV is still available and provides more info if necessary. Also, the contacts always visible on the footer gives the visitor/recruiter/user 
an easy way to contact Andre and obtain whatever more information needed. As mentioned before, the form available in the Contacts page also contributes to make the first approach easier. The footer also includes a 
link for the LinkedIn page with more info.

Because I took the first version of the website and updated and transformed it, I didn't make any new mockups, but the previous ones can be found here: https://www.dropbox.com/sh/c2c7pkk6iinvkna/AABOXc-ZhWJF2rYOQzEXGT-Ca?dl=0



**FEATURES**

The **About Me** page is the landing page where the user can get to know the professional imediatly. It has his picture, a small text about his experiencie (kinds of companies where he worked and kind of
tasks/functions that he has done) and his language skills.
The header and the footer are present through all the pages of the website and allows the user to always have access to the professional contacts (phone and email) and to his profession. The footer
also provides the link to the LinkedIn page and the possibility to download a resume in Europass format.

The navbar on top pf the page also appears in every page and when the screen is smaller it transforms into a "burger menu" to make navigation easier without taking to much screen space.

The **Resume** page provides, on the left side, a list of all the roles he's done and by clicking in each role, the companies where he'd worked under that role show in the middle of the screen. If there's only one company, the dates will
also show and the main tasks and responsabilities. If a role was performed in more than one company, the middle section of the screen will show a list of companies that, when clicked, show below the rest of the information (dates and main
tasks and responsabilities). The map on the right side of the screen shows the location of the company selected. When the mouse is in the building icon in the map (without clicking) the name os the company appears and, if clicked, an info
window opens in the map with a short description of the company.

The **Skills** page has information about the most relevant technical skills and technologies, soft/behavioural skills and certifications. The user can click in each of the skills group and explore the information inside as he/she wishes.

The **Contacts** page provides a form where the user can send a message directly to André that will receive an email with that message and can afterwards reply or contact that user.


**TECHNOLOGIES USED**

- I used Bootstrap documentation for the grid, responsiveness, navbar, pannels, between others: https://getbootstrap.com/docs/4.4/getting-started/introduction/

- The icons used through out the website come from Font Awesome: https://fontawesome.com/icons?d=gallery

- I've used the Google Fonts Titillium Web: https://fonts.google.com/

- Also used jQuery library: https://code.jquery.com/

- Google Maps Javascript API: https://developers.google.com/maps/documentation/javascript/tutorial

- EmailJS: https://www.emailjs.com/

- Javascript
- HTML
- CSS


**TESTING**

I used the following for validating the html, css and javascript code.

CSS validation in https://jigsaw.w3.org/css-validator/#validate_by_input came out with no errors.

HTML validation in https://validator.w3.org/nu/#textarea came out with a few errors in the aria controls of the resume page but because it doesn't hurt the website functioning and I have a deadline to finish this, I've
decided to ignore it for now and investigate further afterwards and, if necessary, do any kind of correction.

Javascript validation in https://esprima.org/demo/validate.html came out with no errors.

Also used the devtools of Chrome to test the responsiveness in all the available models of cellphones and tablets. In the Contacts page, when tested in phones screens, the "transparency" in which the form
is build extends a bit further to the right side than the screen. I've tried to check the sizes of the form elements and also if it was some minimum width defined in the CSS file that might be causing
this but I didn't find out why. I've decided to leave it as it is, as it's barely noticed but I will get back on this to solve it properly.

I've tested the website manually. Went through all the pages and tested all the features, clicks and hovers. This manual testing was also made by someone else other than me to prevent bias. All worked as expected.

It was necessary to add some media queries to allow the website to fit better in different screen sizes. For example in the skills page the margins of one of the divs were taken out for smaller screens to allo
the perception of continuity. For bigger screens the space between the nav bar and the name and role box and between this box and the rest of the content was increased in order to fill beter the available space
and avoid blank space on the bottom of the page.

For testing the email, I've filled the form and sent the email. After that I've checked my inbox and the message I've sent through the form was there, proving that it was working. I've repeated this procedure
several times from several laptops (Apple MacBook Air 2014, Lenovo from 2020, HP ProBook 430G4) and phones (Apple iphone X, iphone 11 and iphone 11Pro) to make sure it works in all of them. Also using different
browsers: Safari, Chrome and Firefox.

The mentioned above laptops, phones and browsers were also used to manually test the website completely.



**DEPLOYMENT**

I've published my website using GitHub pages. I followed these steps:
1. Inside my repository I clicked *settings*;
2. Under the GitHub Pages, in the *Source* drop-down menu I've selected "master branch"
3. The publishing link https://anassuncao.github.io/milestone1-anassuncao/index.html was generated imediatly.

For cloning my repository, the following steps must be taken:
1. On GitHub navigate to the main page of the repository: https://github.com/anassuncao/milestone1-anassuncao
2. Under the repository name click *Clone or download*
3. To clone the repository using HTTPS, under *Clone with HTTPS*, click the "notepad with an arrow" icon. To clone the repository using an SSH key, 
including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click "notepad with an arrow" icon.
4. Open Terminal
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type *git clone* and paste the URL you've copied in step 2.
7. Press *Enter* to create your local clone.




**CREDITS**

* Bootstrap
* Font Awesome
* Google Fonts
* Google Maps Javascript API
* jQuery
The links for the above are already provided in the TECHNOLOGIES USED section

* The image on the background of the page is a photo by Kvistholt Photography on Unsplash:
https://unsplash.com/s/photos/servers
I've edited a little to give it the more "blueish" color.

* I used the following website for picking the colours: 
https://color.adobe.com/pt/create
