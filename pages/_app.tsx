import React from "react";
import App from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
