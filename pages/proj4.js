import React from 'react';
import Badge from '../components/badge'; 
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';
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
  quote: "Efficiency is key!",
  bio: "A passionate manager with a knack for problem-solving.",
  demo: "29, MBA, San Francisco",
  pain: "Lack of efficient tools",
  goal: "Quality control at best prices"
};

const userPersona3 = {
  name: "Habid R",
  job: "Administrator",
  image: "/man2.svg",
  quote: "Efficiency is key!",
  bio: "A passionate manager with a knack for problem-solving.",
  demo: "29, MBA, San Francisco",
  pain: "Lack of efficient tools",
  goal: "Quality control at best prices"
};

const userPersona4 = {
  name: "Maya L",
  job: "Warehouse Worker",
  image: "/woman2.svg",
  quote: "Efficiency is key!",
  bio: "A passionate manager with a knack for problem-solving.",
  demo: "29, MBA, San Francisco",
  pain: "Lack of efficient tools",
  goal: "Quality control at best prices"
};

const user = {
  name: "Jennifer G",
  goal: "Optimize inventory management process."
};

const journey = [
  { task: "Log into inventory system", feeling: "Frustrated", opportunity: "Simplify login process" },
  {},
  { task: "Check inventory levels", feeling: "Overwhelmed", opportunity: "Improve dashboard clarity" },
  {},
  { task: "Check inventory levels", feeling: "Overwhelmed", opportunity: "Improve dashboard clarity" },

  // Add more steps as needed
];

export default function Proj4() {
  return (
    <div>
      <main>
        <div className="hero-bg-proj3">
          <div className="hero-wrapper-gradient">
            <div className="hero-content">
              <div className="hero-header">
                <h4 className="text-left text-color-primary">
                  travelpass
                </h4>
                <h1 className="text-left text-color-secondary padding-horizontal">
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
          <div className="content">
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


            <div className="section grid-x gap-default">
              <div className="col gap-vertical">
                <h2 className="text-left text-color-secondary">
                  goal
                </h2>
                <h5 className="text-left text-color-default">
                  To successfully launch Fishbowl Go, a user-friendly iPad/tablet app, designed to bridge the gap in mobile inventory management for small to medium-sized businesses. Our aim was to simplify administrative tasks, making inventory management as efficient on tablets as it is on desktops. The goal was to enhance operational efficiency by at least 20% and improve user satisfaction, targeting a 15% increase in Fishbowl Inventory's client base within the first six months after launch.              
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
                    description="There's a significant demand for a user-friendly, mobile platform that integrates with existing systems, allowing efficient and flexible management of inventory tasks."
                  />
                </div>
              </div>
            </div>
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
            <div className="section grid-y gap-default">
              <div className="row gap-vertical">
                <h3 className="text-center text-color-primary">
                    user journey map
                </h3>
                <div className="grid-x">
                <UserJourneyMap user={user} journey={journey} />
                </div>
              </div>
            </div>

            <div className="section grid-x gap-default">
              <div className="col gap-vertical">
                <h2 className="text-left text-color-secondary">
                  insights
                </h2>
                <h5 className="text-left text-color-default">
                  During the Fishbowl Go project, we identified a crucial user experience issue: several actions within the app were ambiguous regarding their completion status. Users frequently expressed uncertainty about whether their actions, such as inventory updates or order processing, were successfully executed. To enhance clarity and user confidence, we propose integrating more explicit feedback mechanisms into the app's workflow. This approach includes the implementation of toast messages and clear visual indicators to affirm that an action has been successfully completed. These additions are aimed at reducing user frustration and improving the overall efficiency and user satisfaction with the app.                
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
                  width={1100} // The width of the image in pixels
                  height={400}
                />  

                
              </div>
                    
                   
                    
                    
                  
                    
                    
                  

            </div>
  

            <div className="section grid-x gap-default">
              <div className="col gap-vertical">
                <h2 className="text-left text-color-secondary">
                  outcomes
                </h2>
                <h5 className="text-left text-color-default">
                  Due to time constraints, I decided to take what I learned during the wireframe tests, and move directly to a high-fidelity prototype. My strategy was to address the specific points of friction through careful attention to copy and to make sure the design patterns I’d apply were as clear as possible — and consistent with the overall Venmo experience. Testing was generally successful — most tasks were completed by testers at a success rate of 72% or higher. The path to apply for a loan, however, failed. At the point of realizing what they were about to commit to, users either bounced, or seemed to click back and forth between disclosures and the approval step. Qualitative feedback also revealed several users' issues with better understanding the relationship between their "friends" and "borrowers," or financial literacy in general.                
                </h5>
              </div>
              <div className="col padding-vertical gap-vertical">
                <div>
                  <h6 className="text-left text-color-secondary">
                    Implement Toast Messages
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Introduce toast notifications for immediate feedback after an action is completed, providing users with clear confirmation and peace of mind.                
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    Visual Confirmation Indicators
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Develop visual cues, such as checkmarks or color changes, to indicate successful completion of tasks like inventory updates or data entry.               
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    Enhanced Feedback Loop
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Strengthen the app’s feedback loop by providing distinct auditory or haptic feedback for completed actions, enhancing the user experience for those relying on different sensory inputs.                
                  </h6> 
                </div>
                <div className="img50">
                  <Image
                    src="/fishbowl.jpg" // The path to your image file, relative to the public directory
                    alt="Fishbowl" // Alternative text for the image
                    layout="fill"
                    objectFit="contain"
                  />  

                </div>
                



              </div>
            </div>



      


            <div className="section grid-y gap-default">
              <div className="row">
                <h2 className="text-center text-color-secondary">
                  next steps
                </h2>
                <h4 className="text-center text-color-default">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
                </h4>
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


            <div className="section grid-x gap-default">
              <div className="col">
                <h2 className="text-left text-color-secondary">
                  more works
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}> {/* Adjust the layout as needed */}
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
      </main>
    </div>
  );
}
