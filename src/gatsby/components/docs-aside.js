import React from "react"
import {Link} from "gatsby"

class DocsAside extends React.Component {
  render() {
    const {page} = this.props
    return (
      <aside className="site_article_aside"
             data-xt-sticky='{"sticky": "absolute", "contain": {"top": ".site_header", "bottom": ".site_footer"}}'>
        <div className="site_article_aside_inner">
          <Link to="#" className="btn btn--site_multiline btn--right">
            <span>
              <span className="btn--site_multiline_line">
                12 <strong>EXTENSIONS</strong>
              </span>
            </span>
            <span>
              <span className="btn--site_multiline_line">
                FOR <strong>CHECK AND RADIO</strong>
              </span>
            </span>
            <span>
              <span className="btn--site_multiline_line btn--site_multiline_special">
                <strong className="btn--site_multiline_special_text">GO</strong><span className="icon-chevron-right"></span>
              </span>
            </span>
          </Link>
        </div>
      </aside>
    )
  }
}

export default DocsAside
