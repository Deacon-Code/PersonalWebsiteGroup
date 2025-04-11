import React from 'react'
import styles from './SpecificProjectsStyles.module.css'
import { Component } from 'react'

export class SpecificProjectItem extends Component {
  render() 
  {
    return(
        <div className={styles.Project}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.description}>
              <h1>{this.props.heading}</h1>
              <p>{this.props.text1}</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.picture}>
              <img
                src={this.props.image1}
                alt="img1"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.picture}>
              <img
                src={this.props.image2}
                alt="img2"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.description}>
              <p>{this.props.text2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecificProjectItem
