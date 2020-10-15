import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
/*CUSTOM STYLE*/

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginBottom: theme.spacing(2),
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    fontFamily: "lato",
    padding: "20px",
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    backgroundImage: "linear-gradient(to right,#ffffff, #d6fffb)",

    backgroundSize: "100vw",
    marginRight: "20px",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
  },
}));

export default function Disclaimer() {
  const classes = useStyles();
  //initialization
  const [HelmetTags, setHelmetTags] = React.useState({
    title: "",
    page_name: "",
    keywords: "",
    page_url: "",
    description: "",
    google_site_verification: "",
    robots: "",
    content_language: "",
    pragma: "",
    publisher: "",
    copyright: "",
    submission: "",
    abstract: "",
    alias: "",
    type: "",
    source: "",
    use: "",
    distribution: "",
    language: "",
    rating: "",
    revisit_after: "",
    document_class: "",
    document_rights: "",
    document_type: "",
  });
  //function call
  const page_details = async () => {
    var config = {
      method: "get",
      url: "http://garidakho.com/new_api/page_seo/?id=18",
      headers: {},
    };

    await Axios(config)
      .then(function (response) {
        response.data.forEach((element) => {
          handleChangeHelmetTags(element);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //changes

  function handleChangeHelmetTags(element) {
    setHelmetTags({
      title: element.title,
      page_name: element.page_name,
      page_url: element.page_url,
      keywords: element.keywords,
      description: element.description,
      google_site_verification: "",
      robots: "index,follow,all",
      content_language: "en",
      pragma: "cache",
      publisher: "website url",
      copyright: "copyright 2020 garidakho.com",
      submission: "website url",
      abstract: "website url",
      alias: "website url",
      type: "internet",
      source: "internet service",
      use: "Business",
      distribution: "Global",
      language: "en-us",
      rating: "General",
      revisit_after: "2days",
      document_class: "Published",
      document_rights: "copyrighted work",
      document_type: "Public",
    }); //will be taken from db
    // console.log("error");
  }

  //function call
  useEffect(() => {
    // console.log("error");

    page_details();
  }, []);
  return (
    <div className={classes.container}>
      <Helmet>
        <meta name="google-site-verification" content="" />
        <title>{HelmetTags.title}</title>
        <meta name="page_name" content={HelmetTags.page_name} />
        <meta name="page_url" content={HelmetTags.page_url} />
        <meta name="keywords" content={HelmetTags.keywords} />
        <meta name="description" content={HelmetTags.description} />
        <meta name="robots" content={HelmetTags.robots} />
        <meta name="content-language" content={HelmetTags.language} />
        <meta name="pragma" content={HelmetTags.pragma} />
        <meta name="publisher" content={HelmetTags.publisher} />
        <meta name="copyright" content={HelmetTags.copyright} />
        <meta name="rating" content={HelmetTags.rating} />
        <meta name="submission" content={HelmetTags.submission} />
        <meta name="abstract" content={HelmetTags.abstract} />
        <meta name="alias" content={HelmetTags.alias} />
        <meta name="type" content={HelmetTags.type} />
        <meta name="source" content={HelmetTags.source} />
        <meta name="use" content={HelmetTags.use} />
        <meta name="distribution" content={HelmetTags.distribution} />
        <meta name="language" content={HelmetTags.language} />
        <meta name="revisit_after" content={HelmetTags.revisit_after} />
        <meta name="document_class" content={HelmetTags.document_class} />
        <meta name="document_rights" content={HelmetTags.document_rights} />
        <meta name="document)type" content={HelmetTags.document_type} />
      </Helmet>
      <div>
        <h2 style={{ textAlign: "center" }}>
          <b>DISCLAIMER</b>
        </h2>
        <p>Last updated: 2025-12-31</p>
        <p>
          <b>WEBSITE DISCLAIMER</b>
        </p>
        <p>
          The information provided by <b>Garidakho Pvt. Ltd</b> (“Company”,
          “we”, “our”, “us”) on <b>garidakho.com</b> (the “Site”) is for general
          informational purposes only. All information on the Site is provided
          in good faith, however we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information on the
          Site.
        </p>
        <p>
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
          RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
          AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN
          RISK.
        </p>
        <p>
          <b>EXTERNAL LINKS DISCLAIMER</b>
        </p>
        <p>
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features. Such external links are not
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability or completeness by us.
        </p>
        <p>
          For example, the outlined{" "}
          <a href="https://policymaker.io/disclaimer/">Disclaimer</a> has been
          created using <a href="https://policymaker.io/">PolicyMaker.io</a>, a
          free web application for generating high-quality legal documents.
          PolicyMaker’s{" "}
          <a href="https://policymaker.io/disclaimer/">disclaimer generator</a>{" "}
          is an easy-to-use tool for creating an excellent sample Disclaimer
          template for a website, blog, eCommerce store or app.
        </p>
        <p>
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
          WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN
          ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY
          WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
          THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </p>
        <p>
          <b>ERRORS AND OMISSIONS DISCLAIMER</b>
        </p>
        <p>
          While we have made every attempt to ensure that the information
          contained in this site has been obtained from reliable sources,
          Garidakho Pvt. Ltd is not responsible for any errors or omissions or
          for the results obtained from the use of this information. All
          information in this site is provided “as is”, with no guarantee of
          completeness, accuracy, timeliness or of the results obtained from the
          use of this information, and without warranty of any kind, express or
          implied, including, but not limited to warranties of performance,
          merchantability, and fitness for a particular purpose.
        </p>{" "}
        <p>
          In no event will Garidakho Pvt. Ltd, its related partnerships or
          corporations, or the partners, agents or employees thereof be liable
          to you or anyone else for any decision made or action taken in
          reliance on the information in this Site or for any consequential,
          special or similar damages, even if advised of the possibility of such
          damages.
        </p>
        <p>
          <b>LOGOS AND TRADEMARKS DISCLAIMER</b>
        </p>
        <p>
          All logos and trademarks of third parties referenced on garidakho.com
          are the trademarks and logos of their respective owners. Any inclusion
          of such trademarks or logos does not imply or constitute any approval,
          endorsement or sponsorship of Garidakho Pvt. Ltd by such owners.
        </p>
        <p>
          <b>CONTACT US</b>
        </p>
        <p>
          Should you have any feedback, comments, requests for technical support
          or other inquiries, please contact us by email:{" "}
          <b>garidakho@gmail.com</b>.
        </p>
        <p style={{ marginTop: "5em", fontSize: "0.7em" }}>
          This <a href="https://policymaker.io/disclaimer/">Disclaimer</a> was
          created for <b>garidakho.com</b> by{" "}
          <a href="https://policymaker.io">PolicyMaker.io</a> on 2025-12-31.
        </p>
      </div>
    </div>
  );
}
