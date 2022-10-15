<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://ace-vips.netlify.app/">
    <img alt="ace-vips" src="https://user-images.githubusercontent.com/63806451/156638026-2eb07832-53c0-4408-9954-d6dca3f0e928.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  ACE Website Directory Structure
</h1>

_If you find anything which can be improved in the DIRECTORY.md then ping [me](https://github.com/nparashar150/) and give a pull request._

## 👨‍💻 Directory Structure

```
$ tree -I 'node_modules|cache|test_*|build|.cache|public|resources'
.
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── DIRECTORY.md
├── LICENSE
├── README.md
├── SECURITY.md
├── lerna.json
├── nx.json
├── package.json
├── packages
│   ├── admintable
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── env.example
│   │   ├── modulefederation.config.js
│   │   ├── package.json
│   │   ├── scripts
│   │   │   ├── build.js
│   │   │   ├── overrides
│   │   │   │   └── webpack-config.js
│   │   │   └── start.js
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── bootstrap.tsx
│   │   │   ├── components
│   │   │   │   ├── dashboard
│   │   │   │   │   └── DashboardElements.tsx
│   │   │   │   ├── index-elements.styles.tsx
│   │   │   │   ├── table
│   │   │   │   │   ├── TableComponent.tsx
│   │   │   │   │   ├── TableContainer.tsx
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── inputs
│   │   │   │   │   │   │   ├── InputDate.tsx
│   │   │   │   │   │   │   ├── InputImage.tsx
│   │   │   │   │   │   │   ├── InputText.tsx
│   │   │   │   │   │   │   ├── SelectOption.tsx
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   └── styles
│   │   │   │   │   │   │       ├── input.styles.tsx
│   │   │   │   │   │   │       └── table-elements.styles.tsx
│   │   │   │   │   │   ├── pagination
│   │   │   │   │   │   │   └── Pagination.tsx
│   │   │   │   │   │   ├── toolbar
│   │   │   │   │   │   │   ├── Toolbar.tsx
│   │   │   │   │   │   │   └── filter
│   │   │   │   │   │   │       ├── Filter.tsx
│   │   │   │   │   │   │       └── FilterMenu.tsx
│   │   │   │   │   │   └── updater
│   │   │   │   │   │       └── Updater.tsx
│   │   │   │   │   └── helpers
│   │   │   │   │       └── helper-functions.ts
│   │   │   │   └── toolbar
│   │   │   │       ├── components
│   │   │   │       │   ├── CellSize
│   │   │   │       │   │   ├── CellSize.tsx
│   │   │   │       │   │   └── ICellSize.ts
│   │   │   │       │   └── Filter
│   │   │   │       │       ├── Filter.tsx
│   │   │   │       │       └── IFilter.ts
│   │   │   │       └── index.tsx
│   │   │   ├── configs
│   │   │   │   ├── navbar.config.ts
│   │   │   │   └── user-table-config.ts
│   │   │   ├── contexts
│   │   │   │   ├── AuthContext.tsx
│   │   │   │   ├── TableContext.tsx
│   │   │   │   ├── ThemeContext.tsx
│   │   │   │   └── UserInfoContext.tsx
│   │   │   ├── index.js
│   │   │   ├── interfaces
│   │   │   │   ├── input.interface.ts
│   │   │   │   ├── pagination.interface.ts
│   │   │   │   ├── select-option.interface.ts
│   │   │   │   ├── table.interface.ts
│   │   │   │   └── user.interface.ts
│   │   │   ├── pages
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Index.tsx
│   │   │   │   ├── NotFound.tsx
│   │   │   │   └── SignOut.tsx
│   │   │   ├── react-app-env.d.ts
│   │   │   ├── reportWebVitals.ts
│   │   │   ├── setupTests.ts
│   │   │   ├── theme
│   │   │   │   ├── GlobalStyles.tsx
│   │   │   │   └── theme.d.ts
│   │   │   └── utils
│   │   │       ├── PrivateRoutes.tsx
│   │   │       ├── firebase.tsx
│   │   │       └── functions.tsx
│   │   ├── tsconfig.json
│   │   └── yarn-error.log
│   ├── common
│   │   ├── README.md
│   │   ├── modulefederation.config.js
│   │   ├── package.json
│   │   ├── scripts
│   │   │   ├── build.js
│   │   │   ├── overrides
│   │   │   │   └── webpack-config.js
│   │   │   └── start.js
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── bootstrap.tsx
│   │   │   ├── components
│   │   │   │   ├── Button
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   └── ButtonElements.tsx
│   │   │   │   ├── Navbar
│   │   │   │   │   ├── Navbar.tsx
│   │   │   │   │   ├── NavbarElements.tsx
│   │   │   │   │   └── NavbarUserProfileCard.tsx
│   │   │   │   ├── animations
│   │   │   │   │   └── AnimateIn.tsx
│   │   │   │   └── shared
│   │   │   │       └── sharedStyles.tsx
│   │   │   ├── exports.tsx
│   │   │   ├── hooks
│   │   │   │   ├── useIsMobile.tsx
│   │   │   │   ├── useOnScreen.tsx
│   │   │   │   ├── useOutsideTouch.tsx
│   │   │   │   └── useWindowSize.tsx
│   │   │   ├── index.js
│   │   │   ├── interfaces
│   │   │   │   ├── IButton.ts
│   │   │   │   ├── IGetTimeRemaning.ts
│   │   │   │   └── INavbar.ts
│   │   │   ├── react-app-env.d.ts
│   │   │   ├── reportWebVitals.ts
│   │   │   ├── setupTests.ts
│   │   │   ├── theme
│   │   │   │   ├── GlobalStyles.tsx
│   │   │   │   └── theme.d.ts
│   │   │   └── utils
│   │   │       └── getTimeRemaining.ts
│   │   └── tsconfig.json
│   ├── functions
│   │   ├── api
│   │   │   └── googleDriveDelete.js
│   │   ├── env.example
│   │   ├── package.json
│   │   ├── vercel.json
│   │   └── yarn-error.log
│   └── website
│       ├── CHANGELOG.md
│       ├── README.md
│       ├── env.example
│       ├── gatsby-browser.js
│       ├── gatsby-config.js
│       ├── gatsby-node.js
│       ├── gatsby-ssr.js
│       ├── package-lock.json
│       ├── package.json
│       └── src
│           ├── components
│           │   ├── 404
│           │   │   └── index.js
│           │   ├── Gallery
│           │   │   ├── components
│           │   │   │   ├── image-grid
│           │   │   │   │   ├── ImageGrid.js
│           │   │   │   │   └── ImageGridElements.js
│           │   │   │   └── image-slider
│           │   │   │       ├── ImageSlider.js
│           │   │   │       └── ImageSliderElements.js
│           │   │   └── index.js
│           │   ├── Layout
│           │   │   ├── components
│           │   │   │   ├── Footer
│           │   │   │   │   ├── Footer.js
│           │   │   │   │   └── FooterElements.js
│           │   │   │   ├── Navbar
│           │   │   │   │   ├── Navbar.js
│           │   │   │   │   └── NavbarElements.js
│           │   │   │   └── container.js
│           │   │   ├── index.js
│           │   │   └── themes
│           │   │       └── GlobalStyles.js
│           │   ├── SEO.js
│           │   ├── achievements
│           │   │   ├── AchievementsElements.js
│           │   │   └── achievements-table-slice
│           │   │       ├── Head.js
│           │   │       └── Table.js
│           │   ├── animations
│           │   │   ├── AnimateIn.js
│           │   │   ├── Check.js
│           │   │   ├── Loading.js
│           │   │   ├── check_dark.json
│           │   │   ├── check_light.json
│           │   │   └── loading.json
│           │   ├── button
│           │   │   ├── Button.js
│           │   │   └── ButtonElements.js
│           │   ├── events
│           │   │   ├── eventsCard-slice
│           │   │   │   ├── EventCard.js
│           │   │   │   └── EventCardElements.js
│           │   │   └── index.js
│           │   ├── footer-info
│           │   │   ├── FooterInfo.js
│           │   │   └── FooterInfoElements.js
│           │   ├── hero-slice-secondary
│           │   │   ├── HeroSliceSecondary.js
│           │   │   └── HeroSliceSecondaryElements.js
│           │   ├── landing
│           │   │   ├── LandingElements.js
│           │   │   ├── counter-slice
│           │   │   │   ├── Counter.js
│           │   │   │   └── CounterElements.js
│           │   │   ├── hero-slice
│           │   │   │   ├── HeroElements.js
│           │   │   │   └── HeroSlice.js
│           │   │   ├── index.js
│           │   │   └── side-info-img-slice
│           │   │       ├── SideInfoImg.js
│           │   │       └── SideInfoImgElements.js
│           │   ├── magazine
│           │   │   ├── Elements.js
│           │   │   ├── hero-section-slice
│           │   │   │   ├── HeroSectionSlice.js
│           │   │   │   └── HeroSectionSliceElements.js
│           │   │   └── index.js
│           │   ├── members
│           │   │   ├── index.js
│           │   │   ├── members-card
│           │   │   │   ├── MemberCard.js
│           │   │   │   ├── MemberCardElements.js
│           │   │   │   ├── MemberInfoCard.js
│           │   │   │   ├── index.js
│           │   │   │   ├── members-card
│           │   │   │   │   ├── MemberCard.js
│           │   │   │   │   ├── MemberCardElements.js
│           │   │   │   │   └── MemberInfoCard.js
│           │   │   │   └── members-sort
│           │   │   │       └── MembersSort.js
│           │   │   └── members-sort
│           │   │       └── MembersSort.js
│           │   ├── move-to-top
│           │   │   └── MoveTop.js
│           │   ├── portal
│           │   │   ├── components
│           │   │   │   ├── Form
│           │   │   │   │   ├── Form.js
│           │   │   │   │   ├── FormConfig.json
│           │   │   │   │   └── FormElements.js
│           │   │   │   ├── Google
│           │   │   │   │   ├── LoginElements.js
│           │   │   │   │   └── LoginWithGoogle.js
│           │   │   │   ├── Questions
│           │   │   │   │   ├── QuestionElements.js
│           │   │   │   │   ├── Questions.js
│           │   │   │   │   └── QuestionsConfig.json
│           │   │   │   └── TimeLine
│           │   │   │       ├── Timeline.js
│           │   │   │       ├── TimelineCard
│           │   │   │       │   ├── TimelineCard.js
│           │   │   │       │   └── TimelineCardElements.js
│           │   │   │       └── TimelineElements.js
│           │   │   └── index.js
│           │   ├── private-routes
│           │   │   └── PrivateRoute.js
│           │   ├── projects
│           │   │   ├── components
│           │   │   │   ├── ProjectCard
│           │   │   │   │   ├── ProjectCard.js
│           │   │   │   │   └── ProjectCardElements.js
│           │   │   │   └── ProjectFilter.js
│           │   │   └── index.js
│           │   ├── rich-text
│           │   │   └── index.js
│           │   ├── routes
│           │   │   └── Routes.js
│           │   └── timer
│           │       └── Timer.js
│           ├── context
│           │   ├── FirebaseContext.js
│           │   ├── ThemeContext.js
│           │   └── auth
│           │       ├── AuthActions.js
│           │       ├── AuthContext.js
│           │       └── AuthReducer.js
│           ├── firebase.js
│           ├── fragments
│           │   ├── achievements.js
│           │   ├── event.js
│           │   ├── eventItem.js
│           │   ├── landing.js
│           │   ├── magazine.js
│           │   ├── member.js
│           │   ├── navbar.js
│           │   └── projects.js
│           ├── hooks
│           │   ├── useCounter.js
│           │   ├── useOnScreen.js
│           │   ├── useOutsideTouch.js
│           │   └── useWindowSize.js
│           ├── images
│           │   ├── ACELogoBlack.svg
│           │   ├── ACELogoDark.svg
│           │   ├── ACELogoLight.svg
│           │   ├── ACELogoWhite.svg
│           │   ├── ACETextDark.svg
│           │   ├── close.svg
│           │   └── themeIcon.svg
│           ├── pages
│           │   ├── 404.js
│           │   ├── achievements.js
│           │   ├── events.js
│           │   ├── gallery.js
│           │   ├── index.js
│           │   ├── magazine.js
│           │   ├── members.js
│           │   ├── projects.js
│           │   ├── register
│           │   │   ├── homepage.js
│           │   │   └── question.js
│           │   └── register.js
│           ├── schemas
│           │   ├── Achievements.json
│           │   ├── EventItem.json
│           │   ├── EventPage.json
│           │   ├── Gallery.json
│           │   ├── Homepage.json
│           │   ├── Layout.json
│           │   ├── Magazine.json
│           │   ├── Members.json
│           │   ├── MembersArray.json
│           │   ├── NonEssential.json
│           │   ├── Projects.json
│           │   └── Questions.json
│           ├── styles
│           │   └── sharedStyles.js
│           ├── templates
│           │   ├── NonEssential.js
│           │   └── QuestionsType.js
│           └── views
│               ├── non-essential
│               │   └── NonEssentialElements.js
│               └── questions
│                   └── QuestionsTypeElements.js
├── workspace.json
└── yarn.lock

101 directories, 243 files
```
