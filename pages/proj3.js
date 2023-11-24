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
  name: "Jennifer G",
  job: "Purchasing Manager",
  image: "/woman1.svg",
  quote: "Efficiency is key!",
  bio: "A passionate manager with a knack for problem-solving.",
  demo: "29, MBA, San Francisco",
  pain: "Lack of efficient tools",
  goal: "Quality control at best prices"
};

const userPersona2 = {
  name: "Kevin W",
  job: "Salesrep",
  image: "/man1.svg",
  quote: "Customer relationship management is my priority.",
  bio: "Loves the outdoors and hanging out with friends.",
  demo: "34, High School, Denver",
  pain: "Lack of training tools and customer management features",
  goal: "To quickly access product information and availability"
};

const userPersona3 = {
  name: "Habid R",
  job: "Administrator",
  image: "/man2.svg",
  quote: "Always looking for ways to be more efficient.",
  bio: "Very active in local service organizations.",
  demo: "41, BA, Atlanta",
  pain: "Poor integration with other apps",
  goal: "To streamline inventory processes and reduce manual errors"
};

const userPersona4 = {
  name: "Maya L",
  job: "Warehouse Worker",
  image: "/woman2.svg",
  quote: "I need a reliable and easy way to manage inventory.",
  bio: "Often uses a variety of apps for personal use and work.",
  demo: "26, BS, Columbus",
  pain: "Occasional sync issues between the app and client",
  goal: "Reduce time spent on data entry"
};

const user = {
  name: "Jennifer G",
  goal: "Optimize inventory management process."
};

const journey = [
  { task: "Log into inventory system", feeling: "Hopeful", opportunity: "Simplify login process and training" },
  {},
  { task: "Check inventory levels", feeling: "Overwhelmed", opportunity: "Improve dashboard clarity" },
  {},
  { task: "Update orders and customer info", feeling: "Frustrated", opportunity: "Streamline the integration process" },
  {},
  { task: "Track orders and review reports", feeling: "Anticipation", opportunity: "Continuous improvement based on user feedback, focusing on usability enhancements" },
  {},
  { task: "Check app updates and training videos", feeling: "Invested", opportunity: "Develop a structured system for collecting and prioritizing user suggestions" },

];


const flowData = {
  columns: [
    {
      header: 'Home',
      labels: ['Overview', 'Notifications/stats', 'Calendar'],
      bulletPoints: ['Stats/info of company, products, tickets', 'Updates of changes', 'Stats of each module', 'View events in calendar']
    },
    {
      header: 'Inventory',
      labels: ['Parts & Inventory'], 
      bulletPoints: ['Add/edit parts', 'View/edit general info', 'View/edit inventory details (tracking, BOM, default locations, vendors', 'Inventory event actions (add, scrap, cycle, move)']
    },
    {
      header: 'Manufacturing',
      labels: ['Manufacture Order', 'Work Order', 'Bill of Materials'], 
      bulletPoints: ['Create new MO/WO', 'Issue/unissue orders', 'MO to PO', 'WO to Pick', 'WO to MO', 'Quick Build/Fulfill', 'Editable general info: number, date scheduled, location group, class', 'Editable general info: scheduled start/finish, class, priority, category, location, customer/job', 'View scheduling, details, assigned users, and notes of each Work Order item', 'View/edit instructions']
    },
    {
      header: 'Sales',
      labels: ['Sales Order', 'Customers', 'Picking', 'Packing', 'Shipping', 'Delivery'], 
      bulletPoints: ['Add new sales order', 'View/edit sales order', 'Change status of SO', 'Change date scheduled', 'Change customer or shipping address', 'Change carrier/service', 'View totals', 'View Tax info', 'View SO items', 'Add/delete items', 'Add item by type', 'Quick add product to item list', 'View list of customers', 'Add/edit customers', 'Search customers by status, name, account number, location, contact, salesrep', 'Edit general info (name, status, address, date created/last changed, user ID, contact info)', 'Start, finish, void, commit, group orders', 'Send to ship']
    },
    {
      header: 'Purchasing',
      labels: ['Purchase Order', 'Vendor', 'Receiving'], 
      bulletPoints: ['Add new purchase order', 'View/edit PO', 'Change date scheduled', 'Change customer or shipping address', 'Change carrier/service', 'View list of vendors', 'Add/edit vendors', 'Search vendor by status, name, account number, location', 'Edit general info (name, status, address, date entered/last changed, user ID, contact info)', 'Receive, void, reconcile, fulfill orders']
    },
  ]
};



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
              <div className="section grid-x ">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    overview
                  </h2>
                  <div className="grid-x">
                    <div className="col padding-horizontal2">
                      <Badge icon={DevicesIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>The product</strong> - Fishbowl Go is an app designed for Fishbowl Inventory clients, tailored for warehouse tasks. It serves as a powerful tool to streamline sales orders, manufacture orders, and other tasks for inventory management.
                    </h5>
                  </div>
                  <div className="grid-x">
                    <div className="col padding-horizontal2">
                      <Badge icon={AccessTimeIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>Project duration</strong> - Originally, the project was roadmapped for a month reskinning of the mobile native app. Through research and brainstorming, the project specs changed. We worked on it from January 2021 to September 2021.
                    </h5>
                  </div>
                </div>
                <div className="img50">
                  <Image
                    src="/fishbowl.png" // The path to your image file, relative to the public directory
                    alt="Fishbowl" // Alternative text for the image
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
                          Project Lead
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User Interface (UI) Designer
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
                          User journeys & site maps
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          High-fidelity prototype user flows in Figma
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
                          8 months
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Figma
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Userbrain
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Miro
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
                    Businesses face difficulties in managing inventory efficiently due to desktop-only software limitations. This issue intensifies when they need to manage tasks remotely. Current mobile apps focus mainly on warehouse activities, creating a need for a mobile-friendly inventory management tool for administrative tasks. Fishbowl Inventory clients specifically need a tablet-compatible solution that integrates with their existing systems for effective inventory, order, and data management outside the office.                </h5>
                </div>
                <div className="row">
                  <div className="grid-x gap-secondary">
                    <div className="col gap-vertical">
                      <Card 
                        header="who"
                        title="Who is experiencing the problem?"
                        description="Small to medium-sized businesses using inventory management systems, specifically clients of Fishbowl Inventory."
                        Icon={PersonOutlineIcon}
                      />
                      <Card 
                        header="when"
                        title="When does the problem occur?"
                        description="The problem arises when these businesses need to perform inventory management and administrative tasks remotely, such as when they are away from the office or do not have access to desktop systems."
                        Icon={AccessTimeIcon}
                      />
                    </div>
                    <div className="col gap-vertical">
                      <Card 
                        header="where"
                        title="Where does the user experience the problem?"
                        description="The problem occurs in environments where these businesses need to manage inventory and administrative tasks remotely or on-the-go, outside of a traditional desktop setup."
                        Icon={PlaceOutlinedIcon}
                      />
                      <Card 
                        header="why"
                        title="Why does this pain point matter to the user?"
                        description="Efficient inventory management is key to the success of small and medium-sized businesses. Poor mobile solutions limit their capability to manage inventory remotely, leading to issues in order management, data access, and business agility, thus affecting productivity and possibly revenue."
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
                    To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory&apos;s client base within the first six months after launch.              
                  </h5>
                </div>
                <div className="img50">
                  <Image
                    src="/goal.jpg"
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
                    User research revealed that accountants and business owners primarily depend on traditional, often manual methods for inventory management, such as desktop software, spreadsheets, and paper records. This reliance leads to several pain points:                
                  </h5>
                </div>
                <div className="grid-x gap-secondary">
                  <div className="col"> 
                    <CardNumbered 
                      number="1"
                      title="Errors"
                      description="Manual methods and desktop-bound software contribute to data inaccuracies and operational inefficiencies, especially in real-time inventory tracking."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="2"
                      title="Limited Access"
                      description="The inability to access and manage inventory data on the move hinders effective remote work, causing delays and decision-making challenges."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="3"
                      title="Inaccuracy"
                      description="Managing inventory across various locations is cumbersome with traditional methods, leading to issues in synchronization and record accuracy."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="4"
                      title="Simplicity"
                      description="There&apos;s a significant demand for a user-friendly, mobile platform that integrates with existing systems, allowing efficient and flexible management of inventory tasks."
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
                    During the Fishbowl Go project, we identified a crucial user experience issue: several actions within the app were ambiguous regarding their completion status. Users frequently expressed uncertainty about whether their actions, such as inventory updates or order processing, were successfully executed. To enhance clarity and user confidence, we propose integrating more explicit feedback mechanisms into the app&apos;s workflow. This approach includes the implementation of toast messages and clear visual indicators to affirm that an action has been successfully completed. These additions are aimed at reducing user frustration and improving the overall efficiency and user satisfaction with the app.                
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      implement toast messages
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Introduce toast notifications for immediate feedback after an action is completed, providing users with clear confirmation and peace of mind.                
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      visual confirmation indicators
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Develop visual cues, such as checkmarks or color changes, to indicate successful completion of tasks like inventory updates or data entry.               
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      enhanced feedback loop
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Strengthen the app’s feedback loop by providing distinct auditory or haptic feedback for completed actions, enhancing the user experience for those relying on different sensory inputs.                
                    </h6> 
                  </div>
                  <div className="img50">
                    <Image
                      src="/fb-wireframes.jpg" // The path to your image file, relative to the public directory
                      alt="Fishbowl" // Alternative text for the image
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
                    Through rapid, paper-based sketching, we honed in on simplifying core tasks in the Fishbowl Go app. This exercise was key in integrating effective design patterns and streamlining user navigation between screens, striking a balance between simplicity and functionality.              
                  </h5>
                </div>
                <div className="proj3-img-container">
                  <Image
                    src="/fbgo-sketches-long.jpg" // The path to your image file, relative to the public directory
                    alt="Fishbowl" // Alternative text for the image
                    layout="responsive"
                    width={202.4}
                    height={24}
                    objectFit="contain"
                  />  
                </div>
              </div>
              {/* User Flow */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h3 className="text-center text-color-primary">
                      site map
                  </h3>
                  <div className="map-container">
                    <UserFlow user={flowData.user} columns={flowData.columns} />
                  </div>

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
                      Navigation, quick actions and searching through inventory were essential features we needed to refine.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/wireframe-fb.jpg" // The path to your image file, relative to the public directory
                        alt="Fishbowl" // Alternative text for the image
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="contain"
                      />  
                    </div>
                  </div>
                  <div className="row gap-vertical">
                    <h5 className="text-center text-color-default">
                      Navigation, quick actions and searching through inventory were essential features we needed to refine.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/wireframe-fb-2.jpg" // The path to your image file, relative to the public directory
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
                      After several iterations of the scope of the project, layout, and features it was decided that we would focus on creating an iPad/tablet app geared toward administrative tasks - separate from the mobile app that is geared toward warehouse tasks.
                    </h5>
                    <div className="proj3-img-container">
                      <Image
                        src="/mockup-fb.jpg" // The path to your image file, relative to the public directory
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
                    Usability testing of the Fishbowl Go prototype was a pivotal phase in our project, yielding crucial insights. The testing showed that our redesigned prototype markedly enhanced the existing app, significantly improving user-friendliness and efficiency, thereby addressing key user challenges. However, as we were preparing for the development phase, unforeseen organizational changes occurred. The acquisition of Fishbowl Inventory by another company led to a realignment of priorities and the eventual departure of our development team. This resulted in the project being shelved, despite the prototype's demonstrated potential to meet and exceed user needs.
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Process and Development
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Over the course of the project, our team worked diligently to understand and integrate user feedback into a comprehensive redesign of the Fishbowl Go app. My role involved closely collaborating with the development team, the Head of Product, and the UX Director to ensure that the new design addressed user needs effectively.
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Impact
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Though the redesigned Fishbowl Go app did not see the light of day in its intended form, the project left an indelible mark. It demonstrated the value of listening to user feedback and the need for continuous evolution in software design to meet changing user requirements. The insights gained from this project can serve as a valuable reference for future endeavors in similar domains.              
                    </h6> 
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Considerations
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      Following these developments, I made the decision to leave Fishbowl. Despite the project not reaching its final stages of development and deployment, the journey was filled with learning experiences and professional growth. The process underscored the importance of user-centered design and the impact it can have on product development.
                    </h6> 
                  </div>
                  
                </div>
              </div>
              {/* Prototype */}
              <div className="section grid-y gap-default">
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    prototype
                  </h2>
                  <h4 className="text-center text-color-default">
                    Here is the link to the Figma prototype:
                  </h4>
                  <div className="grid-y col vertical-center">
                    <ButtonPrimary className="button-primary">
                      prototype
                    </ButtonPrimary>  
                  </div>
                  <div className="proj3-img-container">
                    <Image
                      src="/prototype-fb.jpg" // The path to your image file, relative to the public directory
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
