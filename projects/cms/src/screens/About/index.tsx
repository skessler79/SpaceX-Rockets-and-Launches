import React from "react";

import {
  Root,
  AboutImg,
  Tint,
  AboutInfo,
  LeftInfo,
  RightInfo,
  Disclaimer
} from "./styles";

const HomeScreen: React.FunctionComponent = (props) => {
  return (
    <Root>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
      />
      <AboutImg>
        <Tint>
          <h1>ABOUT</h1>
        </Tint>
      </AboutImg>
      <AboutInfo>
        <LeftInfo>
          <h2>IN A NUTSHELL</h2>
          <p>
            This is an informational website for fans of SpaceX and space travel
            in general. Here you will find data on all past and the upcoming
            SpaceX missions, along with sections dedicated to the rockets
            produced by SpaceX.
          </p>

          <p>
            Furthermore, this site is dedicated to SpaceX, the vision of Elon
            Musk, and to all the hard-working people behind the scenes. Through
            their efforts, the boundaries of what is possible in rocket
            technology and space travel are challenged daily. Only a handful of
            years ago if you were to tell someone that a rocket would launch
            into space to then return and vertically land itself you may have
            received some strange looks. Now, this is commonplace all thanks to
            the efforts of SpaceX. And this is only the beginning!
          </p>
          <br />
          <br />
          <h2>WHO CREATED THIS</h2>
          <p>
            This site was created and is maintained by{" "}
            <a href="https://github.com/skessler79/">Selwyn Kessler</a>, a
            computer science student currently studying at Multimedia
            University, Malaysia. The data for this site is provided by the{" "}
            <a href="https://api.spacex.land/graphql/">SpaceX Land API</a>.
          </p>
          <br />
          <br />
          <h2>THE FUTURE</h2>
          <p>
            My hope is to eventually grow this site into something more
            substantial and could eventually provide sufficient information for
            fans seeking knowledge on SpaceX missions, the vehicles they
            produce, and their history.
          </p>
        </LeftInfo>
        <RightInfo>
          <h2>TECHNOLOGIES USED</h2>
          <a href="https://nextjs.org/">
            <img
              src="/static/assets/nextjs-logo-small.png"
              alt="Next.js"
              height="60"
            />
          </a>
          <br />
          <a href="https://reactjs.org/">
            <img src="/static/assets/react-logo.png" alt="React" height="45" />
          </a>
          <br />
          <a href="https://graphql.org/">
            <img
              src="/static/assets/graphql-logo.png"
              alt="GraphQL"
              height="50"
            />
          </a>
          <br />
          <Disclaimer>
            <p>
              DISCLAIMER: The creator of this website have no affiliation with{" "}
              <a href="https://www.spacex.com/">SpaceX</a>. The content herein
              should be considered for educational purposes only. Photography
              used on this website is the property of SpaceX and can be found on
              the{" "}
              <a href="https://www.flickr.com/photos/spacex/">
                SpaceX Flickr Page
              </a>
              .
            </p>
          </Disclaimer>
        </RightInfo>
      </AboutInfo>
    </Root>
  );
};

export default HomeScreen;
