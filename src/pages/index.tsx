import React from 'react'

import {
  FaBriefcase,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMedium,
  FaOsi,
  FaProjectDiagram,
  FaToolbox,
  FaTwitter,
} from 'react-icons/fa'

import styled from 'styled-components'
import HeaderImage from '../components/HeaderImage'
import Layout from '../components/Layout'
import SeoMetadata from '../components/SeoMetadata'
import { useContactInfo } from '../hooks/use-contact-info'
import { size } from '../styles/media'

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: space-between;

  ${size.medium} {
    flex-direction: row;
  }
`

const Portrait = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  margin: 1rem;
  height: auto;
  display: block;
  border-radius: 50%;
  border: 0.5rem solid;
  overflow: hidden;
  border-color: #fefefe;
  box-shadow: 0px 15.619px 31.2381px #00000026;
`

const Intro = styled.div`
  color: ${props => props.theme.secondary};
  text-align: justify;
`

const Social = styled.nav``

const SocialLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.secondary};
  text-align: center;
  border-radius: 50%;
  text-decoration: none;

  margin: 0.25rem 0.5rem;
  font-size: 1.25rem;

  &:hover {
    color: ${props => props.theme.black};
  }
`

const About = styled.div`
  text-align: center;

  ${size.medium} {
    margin-left: 2rem;
  }
`

const HeroHeading = styled.h1`
  font-family: 'IBM Plex Serif', serif;
`

const Description = styled.p`
  font-style: italic;
  color: #888;
  margin-top: 0;
`

const Section = styled.section``
const ResumeItem = styled.div``

const Title = styled.h3`
  margin-bottom: 0;
`

const SkillList = styled.ul`
  columns: 2;

  ${size.large} {
    columns: 3;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;

  ${size.medium} {
    justify-content: flex-end;
  }
`

const DownloadLink = styled.a`
  padding: 0.5rem 1rem;
  color: #e53935;
  border: 1px solid #e53935;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #e53935;
  }
`
const description = `Resume of Nancy Chauhan

Nancy is a software engineer based in Bangalore, India with 2 years of
industry experience. She currently works at Grofers, solving problems 
in supply chain. Primarily she has focused on back-end development with Python 
and Java, and she is also skilled in cloud native technologies such as Kubernetes 
and Docker. She also has made a considerable amount of contribution to open-source.`

export default function ResumePage() {
  const { email, twitter, github, linkedIn, medium } = useContactInfo()

  return (
    <Layout>
      <SeoMetadata title="Resume" description={description} />

      <Links>
        <DownloadLink href="https://drive.google.com/file/d/1dlEZWcvjhEUUbgeymLLLuV2UdV4BB8rF/view?usp=sharing">
          <FaFilePdf /> Download as PDF
        </DownloadLink>
      </Links>
      <Hero>
        <Portrait>
          <HeaderImage name="Nancy Chauhan" />
        </Portrait>
        <About>
          <HeroHeading>Nancy Chauhan</HeroHeading>
          <h3>Software Engineer from Bangalore, India</h3>
          <Social>
            <SocialLink href={`mailto:${email}?Subject=Hello!`}>
              <FaEnvelope />
            </SocialLink>

            <SocialLink href={`https://twitter.com/${twitter}`}>
              <FaTwitter />
            </SocialLink>

            <SocialLink href={`https://github.com/${github}`}>
              <FaGithub />
            </SocialLink>

            <SocialLink href={`https://www.linkedin.com/in/${linkedIn}`}>
              <FaLinkedin />
            </SocialLink>

            <SocialLink href={medium}>
              <FaMedium />
            </SocialLink>
          </Social>
        </About>
      </Hero>

      <Intro>
        <p>
          I am a software engineer based in Bangalore, India with 2 years of
          industry experience. I currently work at Zeotap. Previously I worked at Grofers. 
          Primarily, I am focused on back-end development with
          Python and Java, and I am also skilled in cloud-native technologies
          such as Kubernetes and Docker. I also have a considerable amount of
          contribution to open-source. I regularly write technical blogs to
          share my journey in tech.
        </p>
      </Intro>

      <Section>
        <h2>
          <FaGraduationCap /> Education
        </h2>
        <ResumeItem>
          <Title>B.Tech in Electronics and Communication</Title>
          <Description>
            Indian Institute of Information Technology Una &mdash; Graduated in
            May 2019 &ndash; GPA: 8.09/10
          </Description>
        </ResumeItem>
      </Section>

      <Section>
        <h2>
          <FaToolbox /> Skills
        </h2>
        <SkillList>
          <li>Java (advanced)</li>
          <li>Python (advanced)</li>
          <li>Javascript (intermediate)</li>
          <li>SQL (intermediate)</li>
          <li>Kubernetes (intermediate)</li>
        </SkillList>
      </Section>

      <Section>
        <h2>
          <FaBriefcase /> Work Experience
        </h2>
        <ResumeItem>
          <Title>Software Engineer at Zeotap</Title>
          <Description>
            Bangalore, India &mdash; August 2020 &ndash; present
          </Description>
          <p>
            Backend engineer in Platform Engineering Team
          </p>
          <ul>
            <li>
              Design and develop services for accessing the data quality of ingesting data.
            </li>
            <li>
              Developed services to capture metrics from different stages of data pipeline.
            </li>
          </ul>
        </ResumeItem>

        <ResumeItem>
          <Title>Software Engineer at Grofers</Title>
          <Description>
            Bangalore, India &mdash; September 2019 &ndash; present
          </Description>
          <p>
            Backend engineer in the team responsible for the inventory
            management of Grofers. Currently I am working in improving
            availability of products and optimising the inventory process.
          </p>
          <ul>
            <li>
              Developed a real-time pipeline-aware inventory management system
              using Spring Boot, Axon and event sourcing and deployed to
              production on Kubernetes. This is the replacement of the existing
              legacy system
            </li>
            <li>
              Developed Shipment service for management of shipments in and out
              of warehouses.
            </li>
            <li>
              Developed a user onboarding flow for vendors to allow them to
              manage purchase orders seamlessly.
            </li>
            <li>
              Developed a Prometheus exporter for monitoring CI/CD pipelines
              running on Jenkins.
            </li>
            <li>
              Developed a GitHub App to run static analysis for enforcing coding
              and development conventions at Grofers.
            </li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <Title>Google Summer of Code 2019 with FOSSi Foundation</Title>
          <Description>May 2019 &ndash; August 2019</Description>
          <ul>
            <li>
              Developed a Jenkins plugin library for creating declarative
              pipelines for OpenRISC based-projects
            </li>
            <li>
              Implemented functions in pipeline library to automatically
              bootstrap hardware projects using FuseSoC, a build tool for
              hardware projects
            </li>
            <li>
              Developed tools for generating synthesis reports from the outputs
              of several hardware simulation tools
            </li>
            <li>
              Migrated several projects on LibreCores.org to adopt and utilize
              the tools developed by us in LibreCores CI
            </li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <Title>Indian Institute of Technology Delhi</Title>
          <Description>
            Delhi, India &mdash; December 2019 &ndash; January 2020
          </Description>
          <p>
            Developed FPGA firmware with C and SystemVerilog for transmission of
            HDMI data streams to HDMI and DVI monitors on a Xlinix Spartan6 FPGA
          </p>
        </ResumeItem>
      </Section>

      <Section>
        <h2>
          <FaProjectDiagram /> Projects
        </h2>
        <ResumeItem>
          <Title>Newsletter App</Title>
          <p>
            Build a newsletter app where a user can subscribe to various
            newsletters simultaneously and will receive the issues over their
            emails regularly.
          </p>
        </ResumeItem>
        <ResumeItem>
          <Title>Snowflake</Title>
          <p>A web application to drive employee performance and engagement</p>
        </ResumeItem>
      </Section>
      <Section>
        <h2>
          <FaOsi /> Volunteering and Open Source
        </h2>
        <ResumeItem>
          <Title>Women Tech Global Conference 2020</Title>
          <p>Delivered Talk on Monitoring with Promethues</p>
        </ResumeItem>
        <ResumeItem>
          <Title>Processing Foundation Fellowship</Title>
          <p>
            Contributed to localisation to make Processing tools accessible to
            the Indian community and conducted coding workshops for
            underprivileged stu- dents.
          </p>
        </ResumeItem>
        <ResumeItem>
          <Title>WooTech Singapore</Title>
          <p>
            Mentored College students to develop a full-stack web application in
            Python
          </p>
        </ResumeItem>
      </Section>
    </Layout>
  )
}
