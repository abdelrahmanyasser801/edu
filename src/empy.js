export default function NavLogic({ whoEnter }) {


    const showNav = () => {
      let navTemplate = null;
      switch (whoEnter) {
        case "boss":
          navTemplate = (
            <Fragment>
  
              <NavCard
                buttonName="Statistics"
                destnation="/dataShown/statistics"
                icon="fa-scroll"
                add={true}
              />
              <NavCard
                buttonName="Lectures"
                destnation="/dataShown/lecturesManage"
                icon="fa-chalkboard-teacher"
                add={true}
              />
              <NavCard
                buttonName="Questions"
                destnation="/dataShown/questions-managing"
                icon="fa-chalkboard-teacher"
                add={true}
              />
  
              <NavCard
                buttonName="Absence"
                destnation="/dataShown/absence"
                icon="fa-chalkboard-teacher"
                add={true}
              />
  
              <NavCard
                buttonName="Students Tables"
                destnation="/dataShown/students"
                icon="fa-table"
                add={true}
              />
  
              <NavCard
                buttonName="Groups"
                destnation="/dataShown/groups"
                icon="fa-users"
                add={true}
              />
              <NavCard
                buttonName="Exams Degree"
                destnation="/dataShown/sessionexam"
                icon="fa-window-restore"
                add={true}
              />
              <NavCard
                buttonName="Online Exams"
                destnation="/exams-managing"
                icon="fa-scroll"
                add={true}
              />
            </Fragment>
          );
          break;
  
        case "assistant":
          navTemplate = (
            <Fragment>
              <NavCard
                buttonName="Absence"
                destnation="/dataShown/absence"
                icon="fa-chalkboard-teacher"
                add={true}
              />
  
              <NavCard
                buttonName="Students Tables"
                destnation="/dataShown/students"
                icon="fa-table"
                add={true}
              />
  
              <NavCard
                buttonName="Groups"
                destnation="/dataShown/groups"
                icon="fa-users"
                add={true}
              />
              <NavCard
                buttonName="Exams Degree"
                destnation="/dataShown/sessionexam"
                icon="fa-window-restore"
                add={true}
              />
            </Fragment>
          );
  
          break;
        case "co_admin":
          navTemplate = (
            <Fragment>
              <NavCard
                buttonName="Absence"
                destnation="/dataShown/absence"
                icon="fa-chalkboard-teacher"
                add={true}
              />
              <NavCard
                buttonName="Lectures"
                destnation="/dataShown/lecturesManage"
                icon="fa-chalkboard-teacher"
                add={true}
              />
              <NavCard
                buttonName="Questions"
                destnation="/dataShown/questions-managing"
                icon="fa-chalkboard-teacher"
                add={true}
              />
  
              <NavCard
                buttonName="Students Tables"
                destnation="/dataShown/students"
                icon="fa-table"
                add={true}
              />
  
              <NavCard
                buttonName="Groups"
                destnation="/dataShown/groups"
                icon="fa-users"
                add={true}
              />
              <NavCard
                buttonName="Exams Degree"
                destnation="/dataShown/sessionexam"
                icon="fa-window-restore"
                add={true}
              />
              <NavCard
                buttonName="Online Exams"
                destnation="/exams-managing"
                icon="fa-scroll"
                add={true}
              />
            </Fragment>
          );
  
          break;
  
        default:
          navTemplate = null;
          break;
      }
      return navTemplate;
    };
  
    return <Fragment>{showNav()}</Fragment>;
  }