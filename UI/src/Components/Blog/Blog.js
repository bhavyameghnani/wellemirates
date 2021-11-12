import { Container, CssBaseline, makeStyles} from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { Box } from "@material-ui/core";
import Header from "../LandingPage/Header";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles({
  box: {
    marginTop : 40,
    paddingBottom: 5,
  },
  text: {
    textAlign: "left",
  },
  box2: {
    marginTop : 40,
    marginBottom: 45,
  },
});

const markdown = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero justo, posuere id bibendum at, varius sit amet nunc. Vivamus lacinia lorem at risus tincidunt auctor. Etiam mattis purus eu tincidunt viverra. Cras et nunc suscipit ipsum sollicitudin pulvinar. In quis maximus lorem. Quisque consequat nulla ullamcorper est congue faucibus. Sed pellentesque elit ac fermentum iaculis. Suspendisse tincidunt, eros a dapibus bibendum, sapien lacus sagittis lorem, vitae egestas augue tortor ac est. In lacinia id velit at tempor. Vivamus gravida nunc eget augue hendrerit vehicula. Nam viverra malesuada lectus, sed lobortis eros lacinia ac. Donec mi augue, luctus eget congue vel, varius vitae erat.

Donec id aliquet dui, non varius neque. Vivamus lobortis tortor ac felis finibus, sed mollis risus vulputate. Sed non mi eu dolor luctus interdum sed nec felis. Fusce mollis odio sit amet ex hendrerit ultricies. Cras eu nibh eu purus dignissim porta. Ut aliquam non odio eu molestie. Sed quis lacus quis odio dignissim faucibus ac vel felis. Nullam pulvinar nec libero eget commodo. Fusce felis tortor, vehicula vel dolor eget, rutrum bibendum odio.

Mauris metus velit, bibendum in ipsum eu, tincidunt pharetra enim. Pellentesque auctor tortor eu dignissim commodo. Cras dui mauris, ornare quis rhoncus eget, porta in augue. Fusce sollicitudin metus lacus, dignissim tempor nisl facilisis vel. Vestibulum sit amet mauris tempor, convallis diam quis, hendrerit tellus. Nunc rhoncus eget magna a ultrices. Nunc gravida quam et sagittis tincidunt. Sed mollis dictum dolor, id dapibus tortor. Nam consectetur massa et posuere eleifend. Curabitur vulputate ac tellus accumsan fringilla.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero justo, posuere id bibendum at, varius sit amet nunc. Vivamus lacinia lorem at risus tincidunt auctor. Etiam mattis purus eu tincidunt viverra. Cras et nunc suscipit ipsum sollicitudin pulvinar. In quis maximus lorem. Quisque consequat nulla ullamcorper est congue faucibus. Sed pellentesque elit ac fermentum iaculis. Suspendisse tincidunt, eros a dapibus bibendum, sapien lacus sagittis lorem, vitae egestas augue tortor ac est. In lacinia id velit at tempor. Vivamus gravida nunc eget augue hendrerit vehicula. Nam viverra malesuada lectus, sed lobortis eros lacinia ac. Donec mi augue, luctus eget congue vel, varius vitae erat.

Donec id aliquet dui, non varius neque. Vivamus lobortis tortor ac felis finibus, sed mollis risus vulputate. Sed non mi eu dolor luctus interdum sed nec felis. Fusce mollis odio sit amet ex hendrerit ultricies. Cras eu nibh eu purus dignissim porta. Ut aliquam non odio eu molestie. Sed quis lacus quis odio dignissim faucibus ac vel felis. Nullam pulvinar nec libero eget commodo. Fusce felis tortor, vehicula vel dolor eget, rutrum bibendum odio.

Mauris metus velit, bibendum in ipsum eu, tincidunt pharetra enim. Pellentesque auctor tortor eu dignissim commodo. Cras dui mauris, ornare quis rhoncus eget, porta in augue. Fusce sollicitudin metus lacus, dignissim tempor nisl facilisis vel. Vestibulum sit amet mauris tempor, convallis diam quis, hendrerit tellus. Nunc rhoncus eget magna a ultrices. Nunc gravida quam et sagittis tincidunt. Sed mollis dictum dolor, id dapibus tortor. Nam consectetur massa et posuere eleifend. Curabitur vulputate ac tellus accumsan fringilla.


Phasellus elementum venenatis nisl in sagittis. Proin eget enim volutpat lacus hendrerit vehicula in id ante. Nunc id felis eu odio consectetur lacinia. Nulla sodales gravida vehicula. Cras id risus at metus convallis vehicula et vel mi. Morbi convallis sed odio eget aliquet. Proin vel justo risus. Duis ullamcorper orci nec condimentum viverra. Proin leo leo, faucibus quis eros feugiat, mollis finibus metus. Nullam ac erat congue, gravida enim eu, cursus purus. Suspendisse viverra ipsum a lectus laoreet, et varius neque condimentum. Etiam tellus velit, venenatis quis luctus vel, fringilla a eros.

Vivamus quis ipsum accumsan, imperdiet quam ac, tempor est. Etiam lectus justo, mattis vitae lobortis vel, ornare eget turpis. Donec erat leo, dictum nec efficitur non, hendrerit et augue. Praesent a elit vel ex venenatis feugiat. Vestibulum pulvinar est sed nunc tempus auctor. Donec molestie diam eu leo placerat vestibulum. Maecenas eu fringilla ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum cursus lectus, nec suscipit lorem ornare et. Nullam pulvinar ultricies nisl id facilisis. Quisque blandit eros libero, vitae blandit odio fringilla eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ut justo id ex porttitor porta eget vel leo. In eu nisl condimentum, finibus arcu aliquet, suscipit nibh. Nam feugiat leo nec nisi posuere, a lacinia mauris pretium. Sed id orci et eros lobortis bibendum ac nec ex.`


function Blog({title, author, authorDesignation, blog}) {
  const classes = useStyles();
    return (
        <React.Fragment>
          <CssBaseline />
            <Container maxWidth="lg" >    
                <Header title="Blog" />
                <Typography variant="h4" component="div" align="left" gutterBottom className={classes.box}>
                    {title}
                </Typography>
                <hr/>
                <Typography variant="overline" component="div" className={classes.text}>
                  {author} | {authorDesignation}  
                </Typography>
                <div >
                  <ReactMarkdown className={classes.text}>
                    {blog}
                  </ReactMarkdown>
                </div>
            </Container>
           

        </React.Fragment>

    )
}


Blog.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  authorDesignation : PropTypes.string,
  blog: PropTypes.string,
};

Blog.defaultProps = {
  title : "Best Practices for the Technology",
  author : "Mary Sue",
  authorDesignation : "Front-end Engineer",
  blog : markdown,
};

export default Blog;