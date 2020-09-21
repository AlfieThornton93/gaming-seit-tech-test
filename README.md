# Sky Betting and Gaming

## Software Engineer in Test Tech Test

Thank you for your interest in the role. We are delighted to invite your for an interview but before that, it would be great if you could take a little bit of time to look at the following tasks. It will give us an idea into your technical approach to testing at this time.

The team that you will be working in provide GraphQL interfaces to consumers, providing valuable data on games and users to enable a great customer experience. What we are looking for you to do, is to test a scaled down version of one of our systems. We are looking for a lightweight and reusable test framework asserting that the data that is being requested is what we are expecting.

You can do this in whatever language, tool or framework that you desire but we will be looking for:
- Well structured code
- High quality of code
- Clear understanding of attributes and levels of abstraction that make up a good testing framework

### The API

The API that you are testing is a games catalogue. [This image](https://hub.docker.com/repository/docker/ngr05/sbg-gaming-seit-tech-test) will provide you with 5 games already in the system. Each game must have an ID (generated by the system when created), a name, a slug and a supplier. You can inspect the list of suppliers and games by using the relevant queries that you can see in the docs when running the image. There is a `games`, `suppliers`, `game` (gets a game depending on the id passed) and `gameBySlug`. There are also two mutations for creating games (`addGame`) and updating games (`updateGame`) in the app.

The API in the image runs on port 4000.

### This Repository

The only file that we have added is a Makefile to store commands. In here there is already a stop and a logs command for the application. As you will see further down we are looking for you to add one command but feel free to add anything else that you wish.

You may add anything to your fork and enjoy!

### Tasks

As mentioned above, the language, framework or tools that you use are not restricted. The only things we are looking for is:
- A clear output of the tests that were run
- A simple way of running the tests
- Solid and comprehensive test coverage

If you have any issues with your code or any limitation of the application, please feel free to use pseudo code and comments to explain the thought process.

Please fork the repo and implement the following tasks...

#### Task 1

Before the application can be run, the application will need to be started. Please fill in the start command of the make file to start the application. The only restriction here is, please name the container `sbg-tech-test-app`.

#### Task 2

Please test one of the queries. Choose one of the queries in the application and test it.

#### Task 3

Similar to task 2, test one of the mutations.

#### Additional

If you feel like there is more that you would like to add, feel free to test the application more. There are bugs in the application by design so see how many you can find...

### Once complete

Once complete, please e-mail a link to your repo and instructions to run your tests to Nicholas.Green@skybettingandgaming.com.

### Running the tests

#### Prerequisites
1) Run `npm install`
2) Install jest using npm `npm install jest`
3) Install apollo-boost `npm install apollo-boost`
4) Install jest html reporter `yarn add jest-html-reporter --dev`

To run test run `make test`. Query tests are run first then mutation tests

Test reports are generated in a test-reports folder in root
