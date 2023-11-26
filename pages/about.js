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


export default function About() {
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
          <div className="hero-bg-about">
            <div className="hero-wrapper">
              <div className="hero-content">
                <div className="hero-header">
                  <h4 className="text-left text-color-primary">
                    about me
                  </h4>
                  <h1 className="text-left text-color-secondary">
                    Blending interaction design <br /> and coding to craft unique, <br /> passion-driven UX solutions.
                  </h1>
                </div>
                <div className="button-double-container">
                  <ButtonPrimary className="button-primary">
                    projects
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
                    <div className="col padding-horizontal2">
                      <Badge icon={DevicesIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>bio</strong> - Crafting frictionless design flows and systems, I'm a UX/Product Designer focused on raising the bar for brand experiences. My journey, rooted in the world of marketing, equips me to propel products beyond expectations using a blend of insightful user research, agile design iterations, and rigorous testing. With extensive experience in the design realm, I've developed a keen understanding of the obstacles impeding creative success and business impact. My commitment lies in leveraging UX principles to transform these challenges into efficient, engaging, and elevating solutions, ultimately refining the user journey.
                    </h5>
                  </div>
                  <div className="grid-x">
                    <div className="col padding-horizontal2">
                      <Badge icon={AccessTimeIcon} />
                    </div>
                    <h5 className="text-left text-color-default">
                      <strong>current position</strong> - I am currently working as a UX Designer at Travelpass. My current project is a CRM and my role is primarily the design systems manager and collaborator with the engineers.
                    </h5>
                  </div>
                </div>
              </div>
              {/* Design Philosophy*/}
              <div className="section grid-y gap-default"> 
                <div className="row gap-vertical">
                  <h2 className="text-center text-color-secondary">
                    design philosophy
                  </h2>
                  <h5 className="text-center text-color-default">
                    Below are a list of principles I strive to accomplish in my work.
                  </h5>
                </div>
                <div className="grid-x gap-secondary">
                  <div className="col"> 
                    <CardNumbered 
                      number="1"
                      title="User-Centric Design"
                      description="Focusing deeply on understanding user needs and creating products that provide meaningful and intuitive experiences."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="2"
                      title="Simplicity and Clarity"
                      description="Prioritizing clean, straightforward designs for ease of use and understanding."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="3"
                      title="Accessibility"
                      description="Aiming to create designs that are usable by people of all abilities and backgrounds."
                    />
                  </div>
                  <div className="col"> 
                    <CardNumbered 
                      number="4"
                      title="Sustainability"
                      description="Concentrating on the long-term impacts of design, fostering a longer product lifecycle."
                    />
                  </div>
                </div>
              </div>
              {/* Insights */}
              <div className="section grid-x gap-default">
                <div className="col gap-vertical">
                  <h2 className="text-left text-color-secondary">
                    more about me
                  </h2>
                  <h5 className="text-left text-color-default">
                    As a current UX Designer at TravelPass, my journey in the world of design began with a keen interest in graphic design and data analysis, fields I extensively explored during my undergraduate studies at Utah Valley University. It was there that I discovered my passion for UX design and research, leading me to pivot my career in this exciting direction. My academic tenure was marked by a significant undergraduate thesis project on Accessibility, reflecting my commitment to inclusive design. Volunteering in various leadership roles within the university's presidential office, student council, and student programs, I honed my skills not just in design, but in leadership as well. This diverse background laid a strong foundation for my subsequent professional roles, where I have contributed to the development of design systems, CRMs, web hosting services, and various dashboards, further expanding my expertise in creating impactful digital products.
                  </h5>
                </div>
                <div className="col padding-vertical gap-vertical">
                  <div>
                    <h6 className="text-left text-color-secondary">
                      various hobbies
                    </h6>
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            pc and console video games
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            coding
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            photography
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            longboarding
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            climbing
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      favorite books
                    </h6>
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            harry potter
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            crucial conversations
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            the sprint book
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            atomic habits
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            the help
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-left text-color-secondary">
                      favorite genre of shows and movies
                    </h6>
                    <div>
                      <ul>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            anime
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            drama
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            docuseries
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            action
                          </h6>
                        </li>
                        <li>
                          <h6 className="subtitle1 text-left text-color-default">
                            comedy
                          </h6>
                        </li>
                      </ul>
                    </div>
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


