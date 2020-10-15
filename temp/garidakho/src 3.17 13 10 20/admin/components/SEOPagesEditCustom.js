import React, { Component, forwardRef } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import { Dialog, Slide, Toolbar, IconButton, AppBar, Button } from "@material-ui/core";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SEOPagesEdit from "./SEOSingleRowEditPage";

/* ------ Dialog Open Transition ------ */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default class SEOPagesEditCustom extends Component {

  // const history = useHistory();

  /* ------ Default function constructor Calling ------ */
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pages: [],
      OpenSEOPages: false,
      selctedId: 0,
    }
  }

  /* ------ If Component mount successfully ------ */

  componentDidMount() {

    /* ------ Calling get_All_Page_SEO_Data function ------ */
    this.get_All_Page_SEO_Data();
  }


  /* ------ Getting all seo page data from api ------ */
  get_All_Page_SEO_Data = async () => {

    var config = {
      method: 'get',
      url: 'http://garidakho.com/new_api/page_seo/',
      headers: {}
    };
    var self = this;

    await Axios(config)
      .then(function (response) {
        self.setState({ pages: response.data });
        self.setState({ isLoading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* ------ SEO Data edit dialog handler Start ------ */

  handleCloseSEOPages = (rowData) => {

    this.setState({ OpenSEOPages: !this.state.OpenSEOPages });
    this.setState({ selctedId: rowData.id });

  };

  /* ------ SEO Data edit dialog handler End ------ */

  render() {


    const columns = [
      {
        title: "ID", field: 'id'
      },
      {
        title: "page_name", field: 'page_name'
      },
      {
        title: "title", field: 'title'
      },
      {
        title: "keywords", field: 'keywords'

      },
      {
        title: "description", field: 'description'
      },
      {
        title: "page_url", field: 'page_url'
      },
      {
        title: "date", field: 'date'
      }
    ]

    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    return (

      <div>
        {
          /* 
          ------ if data is not received then loading will continue ------
          ------ if data receive successfully then Table will be show ------
          */
          this.state.isLoading ?
            <p>Loading ...</p>
            : (


              /* ------ Table code start ------ */
              < MaterialTable
                icons={tableIcons}
                title="SEO Pages table"
                columns={columns}
                data={this.state.pages}
                actions={[
                  {
                    icon: tableIcons.Edit,
                    tooltip: 'Edit data',
                    onClick: (event, rowData) => this.handleCloseSEOPages(rowData)
                  }
                ]}
                options={{
                  actionsColumnIndex: -1
                }}

              />

              /* ------ Table code end ------ */

            )}

        {/* ------ Add new Button ------ */}
        <Button
          fullWidth
          variant="contained"
          color="secondary"

          onClick={() => this.setState({ OpenSEOPages: !this.state.OpenSEOPages })}
        >
          Add New Page to seo
        </Button>


        {/* ------ Edit Dialog Start ------ */}

        <Dialog
          open={this.state.OpenSEOPages}
          TransitionComponent={Transition}
          onClose={this.handleCloseSEOPages}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <AppBar
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                onClick={this.handleCloseSEOPages}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div>
            <SEOPagesEdit id={this.state.selctedId} />
          </div>
        </Dialog>

        {/* ------ Edit Dialog End ------ */}


      </div>
    )
  }
}

