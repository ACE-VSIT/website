<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://ace-vips.netlify.app/">
    <img alt="ace-vips" src="https://user-images.githubusercontent.com/63806451/156638026-2eb07832-53c0-4408-9954-d6dca3f0e928.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  ACE Website Development Guide
</h1>

<p>Hello reader, our team has initiated this project in order to update the ACE's website and along with that this can be a great opportunity for all of the team members to learn and explore various technologies which are used on the Web. <br />
This guide includes everything you need to get started with the Project. <br />
Wish you luck! </p>

_If you find anything which can be improved in the README.md then ping [me](https://github.com/nparashar150/) and give a pull request._

## 👨‍💻 Directory Structure
```
.
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── components
│   │   ├── 404
│   │   │   └── index.js
│   │   ├── achievements
│   │   │   ├── AchievementsElements.js
│   │   │   └── achievements-table-slice
│   │   │       ├── Head.js
│   │   │       └── Table.js
│   │   ├── animations
│   │   │   ├── AnimateIn.js
│   │   │   ├── check_dark.json
│   │   │   ├── Check.js
│   │   │   ├── check_light.json
│   │   │   ├── Loading.js
│   │   │   └── loading.json
│   │   ├── button
│   │   │   ├── ButtonElements.js
│   │   │   └── Button.js
│   │   ├── events
│   │   │   ├── eventsCard-slice
│   │   │   │   ├── EventCardElements.js
│   │   │   │   └── EventCard.js
│   │   │   └── index.js
│   │   ├── footer-info
│   │   │   ├── FooterInfoElements.js
│   │   │   └── FooterInfo.js
│   │   ├── Gallery
│   │   │   ├── components
│   │   │   │   └── ImageGrid
│   │   │   │       ├── ImageGridElements.js
│   │   │   │       └── ImageGrid.js
│   │   │   └── index.js
│   │   ├── hero-slice-secondary
│   │   │   ├── HeroSliceSecondaryElements.js
│   │   │   └── HeroSliceSecondary.js
│   │   ├── landing
│   │   │   ├── counter-slice
│   │   │   │   ├── CounterElements.js
│   │   │   │   └── Counter.js
│   │   │   ├── hero-slice
│   │   │   │   ├── HeroElements.js
│   │   │   │   └── HeroSlice.js
│   │   │   ├── index.js
│   │   │   ├── LandingElements.js
│   │   │   └── side-info-img-slice
│   │   │       ├── SideInfoImgElements.js
│   │   │       └── SideInfoImg.js
│   │   ├── Layout
│   │   │   ├── components
│   │   │   │   ├── container.js
│   │   │   │   ├── Footer
│   │   │   │   │   ├── FooterElements.js
│   │   │   │   │   └── Footer.js
│   │   │   │   └── Navbar
│   │   │   │       ├── NavbarElements.js
│   │   │   │       └── Navbar.js
│   │   │   ├── index.js
│   │   │   └── themes
│   │   │       └── GlobalStyles.js
│   │   ├── magazine
│   │   │   ├── Elements.js
│   │   │   ├── hero-section-slice
│   │   │   │   ├── HeroSectionSliceElements.js
│   │   │   │   └── HeroSectionSlice.js
│   │   │   └── index.js
│   │   ├── members
│   │   │   ├── index.js
│   │   │   ├── members-card
│   │   │   │   ├── MemberCardElements.js
│   │   │   │   ├── MemberCard.js
│   │   │   │   └── MemberInfoCard.js
│   │   │   └── members-sort
│   │   │       └── MembersSort.js
│   │   ├── move-to-top
│   │   │   └── MoveTop.js
│   │   ├── portal
│   │   │   ├── components
│   │   │   │   ├── Form
│   │   │   │   │   ├── FormConfig.json
│   │   │   │   │   ├── FormElements.js
│   │   │   │   │   └── Form.js
│   │   │   │   ├── Google
│   │   │   │   │   ├── LoginElements.js
│   │   │   │   │   └── LoginWithGoogle.js
│   │   │   │   ├── Questions
│   │   │   │   │   ├── QuestionElements.js
│   │   │   │   │   ├── QuestionsConfig.json
│   │   │   │   │   └── Questions.js
│   │   │   │   └── TimeLine
│   │   │   │       ├── TimelineCard
│   │   │   │       │   ├── TimelineCardElements.js
│   │   │   │       │   └── TimelineCard.js
│   │   │   │       ├── TimelineElements.js
│   │   │   │       └── Timeline.js
│   │   │   └── index.js
│   │   ├── private-routes
│   │   │   └── PrivateRoute.js
│   │   ├── projects
│   │   │   ├── components
│   │   │   │   ├── ProjectCard
│   │   │   │   │   ├── ProjectCardElements.js
│   │   │   │   │   └── ProjectCard.js
│   │   │   │   └── ProjectFilter.js
│   │   │   └── index.js
│   │   ├── rich-text
│   │   │   └── index.js
│   │   ├── routes
│   │   │   └── Routes.js
│   │   └── SEO.js
│   ├── context
│   │   ├── auth
│   │   │   ├── AuthActions.js
│   │   │   ├── AuthContext.js
│   │   │   └── AuthReducer.js
│   │   ├── FirebaseContext.js
│   │   └── ThemeContext.js
│   ├── firebase.js
│   ├── fragments
│   │   ├── achievements.js
│   │   ├── eventItem.js
│   │   ├── event.js
│   │   ├── landing.js
│   │   ├── magazine.js
│   │   ├── member.js
│   │   ├── navbar.js
│   │   └── projects.js
│   ├── hooks
│   │   ├── useCounter.js
│   │   ├── useOnScreen.js
│   │   ├── useOutsideTouch.js
│   │   └── useWindowSize.js
│   ├── pages
│   │   ├── 404.js
│   │   ├── achievements.js
│   │   ├── events.js
│   │   ├── gallery.js
│   │   ├── index.js
│   │   ├── magazine.js
│   │   ├── members.js
│   │   ├── projects.js
│   │   ├── register
│   │   │   ├── homepage.js
│   │   │   └── question.js
│   │   └── register.js
│   ├── schemas
│   │   ├── Achievements.json
│   │   ├── EventItem.json
│   │   ├── EventPage.json
│   │   ├── Gallery.json
│   │   ├── Homepage.json
│   │   ├── Layout.json
│   │   ├── Magazine.json
│   │   ├── MembersArray.json
│   │   ├── Members.json
│   │   ├── NonEssential.json
│   │   ├── Projects.json
│   │   └── Questions.json
│   ├── styles
│   │   └── sharedStyles.js
│   ├── templates
│   │   ├── NonEssential.js
│   │   └── QuestionsType.js
│   └── views
│       ├── non-essential
│       │   └── NonEssentialElements.js
│       └── questions
│           └── QuestionsTypeElements.js
└── yarn.lock

54 directories, 123 files
```
