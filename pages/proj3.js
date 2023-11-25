import Head from 'next/head';
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';
import Badge from '../components/badge'; 
import Card from '../components/card';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardNumbered from '../components/CardNumbered';
import CardUserPersona from '../components/CardUserPersona';
import UserJourneyMap from '../components/UserJourneyMap';
import BlogCard from '../components/BlogCard';
import DevicesIcon from '@mui/icons-material/Devices';
import UserFlow from '../components/UserFlow';

const userPersona1 = {
  name: "Olivia F",
  job: "Product Manager",
  image: "/woman3.svg",
  quote: "I love when everything falls into place perfectly during my trips.",
  bio: "Thrives on organization. Often takes charge in planning trips.",
  demo: "30, BA, Chicago",
  pain: "Difficulty finding reliable information in one platform",
  goal: "To create detailed travel itineraries without spending excessive time on research"
};

const userPersona2 = {
  name: "Eric W",
  job: "Sales Manager",
  image: "/man4.svg",
  quote: "I need to plan my trips quickly between meetings.",
  bio: "Relies on tools that save time and simplify his busy lifestyle.",
  demo: "35, BA, New York City",
  pain: "Lack of a quick and easy tool for travel planning",
  goal: "To efficiently book and manage travel plans"
};

const userPersona3 = {
  name: "Paula T",
  job: "Marketing Manager",
  image: "/woman4.svg",
  quote: "Each trip I take is a reflection of my unique taste and style.",
  bio: "Enjoys curating unique experiences.",
  demo: "28, High School, LA",
  pain: "Existing platforms lack personalization and tailored travel suggestions",
  goal: "To find a travel planning platform that offers custom recommendations"
};

const userPersona4 = {
  name: "Ian M",
  job: "Engineer",
  image: "/man3.svg",
  quote: "I want a one-stop solution for all my travel needs.",
  bio: "Values convenience, preferring all-in-one solutions.",
  demo: "40, BS, Austin",
  pain: "Too many sites for different aspects of travel",
  goal: "To efficiently manage plans through a single, integrated platform"
};

const user = {
  name: "Eric W",
  goal: "To efficiently book and manage travel plans."
};

const journey = [
  { task: "Search for hotel and book", feeling: "Curious", opportunity: "Enhance search functionality with better filters and recommendations to make finding the perfect hotel more engaging and efficient" },
  {},
  { task: "Sign into account to connect booking to a new trip", feeling: "Tentative", opportunity: "Redesign the account sign-in process and trip connection interface for a more straightforward and user-friendly experience" },
  {},
  { task: "Search for nearby activities and add to itinerary", feeling: "Anxious", opportunity: "Optimize activity search and itinerary integration with user-friendly interfaces and clear instructions to alleviate anxiety and enhance satisfaction" },
  {},
  { task: "Review details of bookings and plans", feeling: "Eager", opportunity: "Refine the presentation of booking details and plans with a focus on clarity and accessibility, enhancing the user's anticipation and eagerness" },
  {},
  { task: "Rate the trip and send review for bookings", feeling: "Reflective", opportunity: "Create an engaging and simple feedback system that encourages users to reflect on their experience and easily share their thoughts" },

];




export default function Proj3() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="page-container">
          <div className="hero-bg-proj3">
            <div className="hero-wrapper-gradient">
              <div className="hero-content">
                <div className="hero-header">
                  <h4 className="text-left text-color-primary">
                    travelpass
                  </h4>
                  <h1 className="text-left text-color-secondary">
                    providing the explorer at heart unforgettable adventures.              
                  </h1>
                </div>
                <div className="button-double-container">
                  <ButtonPrimary className="button-primary">
                    prototype
                  </ButtonPrimary>   
                  <button className="button-secondary" onClick={() => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer')}>
                    website
                  </button>             
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content" id="projects-section">
              {/* Overview */}
              <div className="section grid-x gap-secondary">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    overview
                  </h2>
                  <div className="grid-x">
                    <div className="col padding-horizontal2">
                      <Badge icon={DevicesIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>The product</strong> - 
                        Travelpass is a travel booking platform that offers a wide selection of hotels and travel experiences, along with unique access to non-public rates. Designed for travelers who take multiple trips a year, it aims to simplify the travel planning process by providing comprehensive options and competitive pricing.
                    </h5>
                  </div>
                  <div className="grid-x">
                    <div className="col padding-horizontal2">
                      <Badge icon={AccessTimeIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>Project duration</strong> - 
                        In January 2023, we initiated a project to enhance Travelpass by adding a trip planning feature, focusing on stay details and custom event creation. The first version, launched in May 2023, laid the groundwork for future integrations with event bookings and transportation services.
                    </h5>
                  </div>
                </div>
                <div className="img50">
                  <Image
                    src="/web-tpg.png" // The path to your image file, relative to the public directory
                    alt="Travelpass" // Alternative text for the image
                    layout="fill"
                    objectFit="contain"
                  />   
                </div>
              </div>
              {/* Roles */}
              <div className="section grid-x gap-default">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      role
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User Experience (UX) Designer
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Project Lead - Jan-Aug
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User Interface (UI) Designer - Jan-Aug
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Interaction (IxD) Designer
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User Researcher
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Design Systems (DSM) Manager
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Information Architect
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      deliverables
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User surveys & user tests
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Personas
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User journeys
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Research & Competitive Analysis 
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          High-fidelity prototype user flows in Figma
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Style Guide
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Design System
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Usability tests & findings
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      project specifications
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          4 months
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Figma
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Notion
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Microsoft Clarity
                        </h6>
                      </li>
                    </ul>
                  </div>
              </div>
              {/* Problem Framing */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    problem framing
                  </h2>
                  <h5 className="text-center text-color-default">
                    Travelers currently face the challenge of using disjointed tools for trip planning, leading to a fragmented experience. Our goal was to develop a simple MVP for Travelpass that integrates hotel bookings and custom event planning into a single, user-friendly itinerary feature.
                  </h5>
                </div>
                <div className="row">
                  <div className="grid-x gap-secondary">
                    <div className="col gap-vertical">
                      <Card 
                        header="who"
                        title="Who is experiencing the problem?"
                        description="The problem is experienced by both leisure and business travelers who need to organize their trips."
                        Icon={PersonOutlineIcon}
                      />
                      <Card 
                        header="when"
                        title="When does the problem occur?"
                        description="Often before the trip when planning and continues to be a concern during the trip."
                        Icon={AccessTimeIcon}
                      />
                    </div>
                    <div className="col gap-vertical">
                      <Card 
                        header="where"
                        title="Where does the user experience the problem?"
                        description="The problem occurs at home or elsewhere when planning the trip and when trying to go to the hotel or event."
                        Icon={PlaceOutlinedIcon}
                      />
                      <Card 
                        header="why"
                        title="Why does this pain point matter to the user?"
                        description="This pain point is significant because a fragmented planning process increases stress and diminishes the travel experience, making a unified planning tool essential for efficient and enjoyable travel."
                        Icon={FavoriteBorderOutlinedIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Goal */}
              <div className="section grid-x gap-default">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    goal
                  </h2>
                  <h5 className="text-left text-color-default">
                    The primary goal was to create an efficient trip planning feature in Travelpass that intuitively presented and prioritized key information for a successful stay. This feature enabled users to effortlessly manage their bookings, including options to print receipts, cancel bookings, share itineraries, and add plans to personal calendars. Emphasis was on user-centric design, ensuring that the most critical actions and information were easily accessible and manageable.
                  </h5>
                </div>
                <div className="img50">
                  <Image
                    src="/goal-tpg2.png"
                    alt="Goal"
                    layout="fill"
                    objectFit="contain" // Optional: you can adjust as needed
                  />
                </div>
              </div>
              {/* Understanding Users */}
              <div className="section grid-y gap-default"> 
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    understanding the user
                  </h2>
                  <h5 className="text-center text-color-default">
                    Travelpass users seek a trip planning feature that offers comprehensive information and ease of organization, prioritizing an all-in-one tool for managing accommodations, flights, and activities. They value detailed visual organization, user-friendly interfaces, and integrated functionalities to streamline their travel planning process.
                  </h5>
                </div>
                <div className="grid-x gap-secondary">
                  <div className="col"> 
                    <CardNumbered 
                      number="1"
                      title="Information Organization"
                      description="Users struggle to organize and access key travel details in one place, often feeling overwhelmed by disparate sources of information."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="2"
                      title="Convenience"
                      description="These users value the ease and efficiency but frequently encounter cumbersome and time-consuming processes across various platforms."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="3"
                      title="Preferences"
                      description="Users have distinct preferences in how they access travel information, often finding existing tools lack the personalization and detail they need."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="4"
                      title="Integration"
                      description="Travelers face the challenge of using multiple, unconnected platforms for different aspects of their trip, leading to a fragmented planning experience."
                    />
                  </div>
                </div>
              </div>
              {/* User Personas */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h3 className="text-center text-color-primary">
                      meet these users
                  </h3>
                  <div className="grid-x gap-secondary">
                    <div className="col"> 
                      <CardUserPersona persona={userPersona1} />
                    </div>
                    <div className="col"> 
                      <CardUserPersona persona={userPersona2} />
                    </div>
                    <div className="col"> 
                      <CardUserPersona persona={userPersona3} />
                    </div>
                    <div className="col"> 
                      <CardUserPersona persona={userPersona4} />
                    </div>
                  </div>
                </div>
              </div>
              {/* User Journey Map */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h3 className="text-center text-color-primary">
                      user journey map
                  </h3>
                  <div className="map-container">
                    <UserJourneyMap user={user} journey={journey} />
                  </div>
                </div>
              </div>
              {/* Insights */}
              <div className="section grid-x gap-default">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    insights
                  </h2>
                  <h5 className="text-left text-color-default">
                    User research and feedback analysis from 37,221 TravelPass users revealed significant interaction issues with the trips feature. Notably, 27% of users exhibited 'rage clicks', indicating frustration or confusion, while 5.68% encountered 'dead clicks', suggesting non-responsive elements. Additionally, 1% of users demonstrated excessive scrolling, which may point to difficulties in finding relevant information. A striking 82.18% of these interactions were recorded on mobile devices, highlighting potential shortcomings in mobile responsiveness. User feedback consistently pointed to a confusing flow within the trips feature, frequent errors like creating duplicate trips, poor responsiveness on mobile and tablet interfaces, and unclear forms. These insights underscore the need for a targeted redesign focusing on mobile optimization, streamlined navigation, and a more intuitive user interface to enhance the overall user experience.
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      mobile optimization
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Improve the site’s mobile experience by streamlining the flow for faster load times, optimizing touch targets, and minimizing clicks. Update the design system to enhance accessibility and responsiveness, focusing on elements like cards and typography.
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      streamlined navigation
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Revise the user journey for greater intuitiveness, restructure the information layout, and simplify forms. Implement breadcrumb navigation and progress indicators to guide users clearly through the process, reducing confusion and scrolling.
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      error handling
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      The expedited launch of the TravelPass site led to numerous errors, requiring significant post-launch fixes. The tight deadline affected initial testing, necessitating later updates to enhance functionality and the user interface.
                    </h6> 
                  </div>
                  <div className="img50">
                    <Image
                      src="/insights-tpg.png" // The path to your image file, relative to the public directory
                      alt="Travelpass" // Alternative text for the image
                      layout="fill"
                      objectFit="contain"
                    />  
                  </div>
                </div>
              </div>
              {/* Ideation */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    ideation
                  </h2>
                  <h5 className="text-center text-color-default">
                    We went through three iterations of the trips feature. Below shows the process of simplifying navigation, design elements, and the creation and management of itineraries. 
                  </h5>
                </div>
                <div className="proj3-img-container">
                  <Image
                    src="/tpg-sketches.jpg" // The path to your image file, relative to the public directory
                    alt="Fishbowl" // Alternative text for the image
                    layout="responsive"
                    width={202.4}
                    height={24}
                    objectFit="contain"
                  />  
                </div>
              </div>
              {/* Wireframes */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h3 className="text-center text-color-primary">
                      digital wireframes
                  </h3>
                  <div className="row gap-vertical">
                    <h5 className="text-center text-color-default">
                      In the initial phase, our design approach focused on automating trip creation. However, further user research revealed that the majority of our users typically have preconceived trip plans, diminishing the need for a fully automated itinerary. Consequently, this feature was deprioritized to better align with our users' actual planning behaviors and preferences.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/wireframes-tpg.png" // The path to your image file, relative to the public directory
                        alt="Travelpass" // Alternative text for the image
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="contain"
                      />  
                    </div>
                  </div>
                  <div className="row gap-vertical">
                    <h5 className="text-center text-color-default">
                      Actions like searching, adding and booking through trips needed to be simplified.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/wireframe-tpg.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="contain"
                      />  
                    </div>
                    <div className="proj3-img-container">
                      <Image
                        src="/wireframe-tpg-2.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="contain"
                      />  
                    </div>
                  </div>

                </div>
              </div>
              {/* Mockups */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h3 className="text-center text-color-primary">
                      key mockups
                  </h3>
                  <div className="row gap-vertical">
                    <h5 className="text-center text-color-default">
                      Below shows the three versions of trips for Travelpass. Priorities and scope changed a lot throughout this project. Thus, the user problems were never fully resolved.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/mockup-tpg1.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={572.8}
                        height={308.5}
                        objectFit="contain"
                      />  
                    </div>
                    <div className="proj3-img-container">
                      <Image
                        src="/mockup-tpg2.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={572.8}
                        height={308.5}
                        objectFit="contain"
                      />  
                    </div>
                    <div className="proj3-img-container">
                      <Image
                        src="/mockup-tpg3.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={572.8}
                        height={308.5}
                        objectFit="contain"
                      />  
                    </div>
                  </div>
                  

                </div>
              </div>


              



              {/* Outcomes */}
              <div className="section grid-x gap-default">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    outcomes
                  </h2>
                  <h5 className="text-left text-color-default">
                    Following the initial launch, the project team expanded with the addition of three designers, leading to a shift in my responsibilities. I transitioned from a UI/UX designer and researcher role to focusing on interaction design, managing the design system, and overseeing information architecture. Concurrently, changes in management positions led to a reevaluation of priorities and project scope. During this period, although the flow was streamlined, several pre-existing issues, such as errors and responsiveness challenges, persisted.
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Process and Development
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      During the project, I initially worked as a UI/UX designer and researcher, focusing on user interviews and collaboration with the data team and product manager. Later, my role shifted to backend design, refining the design system and reassessing the user flow in close coordination with the architects.
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Impact
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      While some user issues remained unresolved, the trip planning feature's redesign attracted 32,327 new unique users and boosted sales within a month of relaunch. This update demonstrated that the planning process was effectively simplified, aligning more closely with the needs of many users.
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Considerations
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      In redesigning the trip planning feature, it was crucial to balance user feedback with project timelines, resulting in a streamlined yet imperfect solution. The relaunch's success, marked by increased user engagement and sales, underscored the importance of continuous iteration to address remaining user challenges.
                    </h6> 
                  </div>
                  
                </div>
              </div>
              {/* Design System */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    design system
                  </h2>
                  <h4 className="text-center text-color-default">
                    Below is the design system I created and managed.
                  </h4>
                  <div className="proj3-img-container">
                    <Image
                      src="/design-system.jpg" // The path to your image file, relative to the public directory
                      alt="Fishbowl" // Alternative text for the image
                      layout="responsive"
                      width={200}
                      height={200}
                      objectFit="contain"
                    />  
                  </div>

                </div>
                <div className="row">
                  <div className="grid-x">
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                  </div>
                </div>
              </div>
              {/* Prototype */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    website
                  </h2>
                  <h4 className="text-center text-color-default">
                    Here is the link to the trip feature of Travelpass:
                  </h4>
                  <div className="grid-y col vertical-center">
                    <ButtonPrimary className="button-primary">
                      website
                    </ButtonPrimary>  
                  </div>

                </div>
                <div className="row">
                  <div className="grid-x">
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                  </div>
                </div>
              </div>
              {/* More Work */}
              <div className="section grid-x gap-default">
                <div className="col blog-container">
                  <h2 className="text-left text-color-secondary">
                    more works
                  </h2>
                  <div className="grid-x blog"> 
                    <BlogCard 
                      image="/hm-project-img.jpg"
                      title="Haven Massage"
                      onButtonClick={() => console.log('Read more about Blog 1')}
                    />
                    <BlogCard 
                      image="/tp-project-img.jpg"
                      title="Travelpass"
                      onButtonClick={() => console.log('Read more about Blog 2')}
                    />
                    <BlogCard 
                      image="/coding.jpeg"
                      title="Dev Wiki"
                      onButtonClick={() => console.log('Read more about Blog 3')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
