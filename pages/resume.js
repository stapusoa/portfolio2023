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


export default function Resume() {
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
          <div className="hero-bg-resume">
            <div className="hero-wrapper">
              <div className="hero-content">
                <div className="hero-header">
                  <h4 className="text-left text-color-primary">
                    resume
                  </h4>
                  <h1 className="text-left text-color-secondary">
                    Elevating UX with <br /> innovative, user-focused <br /> designs and continuous evolution.
                  </h1>
                </div>
                <div className="button-double-container">
                  <ButtonPrimary className="button-primary">
                    download
                  </ButtonPrimary>   
                  <button className="button-secondary" onClick={() => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer')}>
                    linkedin
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
                    <h5 className="text-left text-color-default">
                      Senior UX Designer with 4+ years of experience in creating user-centered designs for mobile and web applications. Skilled in conducting user research, developing design strategies, and collaborating with cross-functional teams to deliver exceptional products.
                    </h5>
                  </div>
                  </div>
              </div>
              {/* Roles */}
              <div className="section grid-x gap-default">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      soft skills
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Empathy
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Problem-solving
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Adaptability
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Team work
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Openness to feedback
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      hard skills
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User research
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Wireframing and prototyping
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Visual design
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          User experience design
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Information architecture
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Interaction design
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          HTML/CSS and Javascript basics
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      awards and certifications
                    </h6>
                    <ul>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Google UX Design Professional Certificate - Jul 2023
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Programming with Javascript - Jul 2023
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Executive Certificate of Completion - Apr 2019
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle1 text-left text-color-default">
                          Creativity and Innovation Award - Feb 2019
                        </h6>
                      </li>
                    </ul>
                  </div>
              </div>
              {/* Education */}
              <div className="section grid-x gap-default">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    education
                  </h2>
                  <h5 className="text-left text-color-default">
                    I began my academic journey at Utah State University Eastern, where I pursued an Associate&aposs degree in Psychology. During this time, I actively engaged in various service programs, gaining valuable insights into human behavior and interaction. I then advanced my studies at Utah Valley University, where I earned a Bachelor&aposs degree in Graphic Design and Communication. My time at Utah Valley was enriched by my involvement in leadership and service programs, allowing me to develop a well-rounded skill set. In addition to my major, I delved into data analysis and leadership studies, further broadening my academic and professional horizons. A highlight of my time there was the publication of my thesis on Accessibility, a testament to my commitment to inclusive design and research.
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Associate of Science - Utah State University Eastern
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      2010-2012
                    </h6> 
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            psychology
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            data analysis
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            event planning
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            student leadership
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            public speaking
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Bachelor of Science - Utah Valley University
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      2016-2019
                    </h6> 
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            graphic design
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            ux design
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            data analysis
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            student leadership
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            public speaking
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      Google UX Design Professional Certificate
                    </h6>
                    <h6 className="subtitle1 text-left text-color-default">
                      2023
                    </h6> 
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            ux design
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            ux research
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            web design
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            app design
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
               {/* Work Experience */}
               <div className="section grid-y gap-default"> 
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    work experience
                  </h2>
                  <h5 className="text-center text-color-default">
                    My professional journey began in the realm of graphic design, where I honed my skills in visual communication and design principles. This foundational experience paved the way for my transition into the dynamic field of UX design. In this role, I cultivated a deep understanding of user-centered design practices and methodologies. Over time, my career evolved to focus more on UX research and UI development, areas where I now channel my passion. This shift allowed me to blend my expertise in design with a keen interest in user behavior and technology, leading me to develop intuitive, user-friendly interfaces backed by thorough research and analysis.
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
              
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}







