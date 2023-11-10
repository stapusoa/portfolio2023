import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';
import Card from '../components/card';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Proj1() {
  return (
    <div>
      <main>
        <div className="hero-bg-proj1">
          <div className="hero-wrapper-gradient">
            <div className="hero-content">
              <div className="hero-header">
                <h4 className="text-left text-color-primary">
                  fishbowl go
                </h4>
                <h1 className="text-left text-color-secondary padding-horizontal">
                  simplifying inventory management in the warehouse and in the office.
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
            <div className="section grid-x gap-default">
              <div className="col gap-vertical">
                <h2 className="text-left text-color-secondary">
                  overview
                </h2>
                <h5 className="text-left text-color-default">
                  Fishbowl Go is an intuitive app designed for Fishbowl Inventory clients, tailored for iPad and tablet use. Bridging the gap between desktop and mobile, it simplifies inventory management for small to medium-sized businesses. This companion app to the warehouse-focused mobile version streamlines administrative tasks, enhancing productivity with easy-to-use features for inventory tracking and order processing.              
                </h5>
              </div>
              <div className="col padding-vertical gap-vertical">
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
            </div>
            <div className="section grid-y gap-default">
              <div className="row gap-vertical">
                <h2 className="text-center text-color-secondary">
                  problem framing
                </h2>
                <h5 className="text-center text-color-default">
                  Small to medium-sized businesses often struggle with efficient inventory management due to the limitations of desktop-only software solutions. This challenge is compounded when they need to perform administrative tasks remotely or on-the-go. Existing mobile applications primarily cater to warehouse operations, leaving a gap in streamlined, mobile-accessible inventory management for administrative purposes. Fishbowl Inventory clients, in particular, require an agile, tablet-friendly solution that integrates seamlessly with their current systems, enabling effective management of inventory, orders, and data away from the desktop environment.                
                </h5>
              </div>
              <div className="row">
                <div className="grid-x gap-secondary">
                  <div className="col gap-vertical">
                    <Card 
                      header="who"
                      title="Who is experiencing the problem?"
                      description="An intuitive inventory management app for small to medium-sized businesses."
                      Icon={PersonOutlineIcon}
                    />
                    <Card 
                      header="when"
                      title="When does the problem occur?"
                      description="An intuitive inventory management app for small to medium-sized businesses."
                      Icon={AccessTimeIcon}
                    />
                  </div>
                  <div className="col gap-vertical">
                    <Card 
                      header="where"
                      title="Where does the user experience the problem?"
                      description="An intuitive inventory management app for small to medium-sized businesses."
                      Icon={PlaceOutlinedIcon}
                    />
                    <Card 
                      header="why"
                      title="Why does this pain point matter to the user?"
                      description="An intuitive inventory management app for small to medium-sized businesses."
                      Icon={FavoriteBorderOutlinedIcon}
                    />

                  </div>
                </div>
              </div>
            </div>


            <div className="section grid-x gap-default">
              <div className="col">
                <h2 className="text-left text-color-secondary">
                  goal
                </h2>
                <h4 className="text-left text-color-default">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
                </h4>
              </div>
              <div className="col padding-vertical gap-vertical">
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
              </div>
            </div>


            <div className="section grid-y gap-default">
              <div className="row">
                <h2 className="text-center text-color-secondary">
                  user research
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
                  insights
                </h2>
                <h4 className="text-left text-color-default">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
                </h4>
              </div>
              <div className="col padding-vertical gap-vertical">
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
              </div>
            </div>


            <div className="section grid-x gap-default">
              <div className="col">
                <h2 className="text-left text-color-secondary">
                  ideation
                </h2>
                <h4 className="text-left text-color-default">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
                </h4>
              </div>
              <div className="col padding-vertical gap-vertical">
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
              </div>
            </div>


            <div className="section grid-y gap-default">
              <div className="row">
                <h2 className="text-center text-color-secondary">
                  outcomes
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
                <h4 className="text-left text-color-default">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
                </h4>
              </div>
              <div className="col padding-vertical gap-vertical">
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
                <div>
                  <h6 className="text-left text-color-secondary">
                    role
                  </h6>
                  <h6 className="subtitle1 text-left text-color-default">
                    Lorem ipsum dolor sit amet consectetur.                 
                  </h6> 
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}
