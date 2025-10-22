import { gql } from "@apollo/client";

export const GET_SLIDERS = gql`
  query GetSliders {
    page(id: "home", idType: URI) {
      homePageFieldsSliderSection {
        backgroundVideo
      }
    }
    sliders {
      nodes {
        title
        sliderFields {
          sliderMainHeading
          subtitle
          shortDescription
          button1Text
          button1Link
          button2Text
          button2Link
        }
      }
    }
  }
`;

export const GET_HEADER_MENU = gql`
  query GetHeaderMenu {
  menu(id: "Main Navigation", idType: NAME) {
    menuItems(where: { parentId: null }) {
      nodes {
        id
        label
        url
        childItems {
          nodes {
            id
            label
            url
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  }
}
`;


export const GET_WHAT_WE_OFFER = gql`
query {
  page(id: "home", idType: URI) {
    title
    homePageFieldsWhatWeOffer {
      whatWeOffersubHeading
      whatWeOfferMainHeading
    }
  }

  whatWeOffers {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
      uri
    }
  }
}
`;

export const GET_INDUSTRY_COVERAGE = gql`
 query GetIndustryCoverage {
  page(id: "home", idType: URI) {
    title
    homePageFieldsIndustryCoverage {
      industryCoverageMainHeading
    }
  }
  industries {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
      uri
      industriesFieldOptions {
        colorCode
      }
    }
  }
 }
 `

export const GET_HOME_PAGE_SERVICES = gql`
  query GetHomePageServices {
    page(id: "home", idType: URI) {
      title
      homePageFieldsOurServices {
        ourServicesMainHeading
      }
    }
    services(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        uri
      }
    }
  }
`;
export const GET_SUSTAINABILITY = gql`
  query GetSustainability {
    page(id: "home", idType: URI) {
      title
      homePageFieldsSustainabilityCommitment {
        sustainabilityCommitmentSubHeading
        sustainabilityCommitmentMainHeading
      }
    }
    sustainabilityCommitments {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        uri
      }
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    page(id: "home", idType: URI) {
      title
      homePageFieldsTestimonials {
        testimonialsSubHeading
        testimonialsMainHeading
      }
    }
    testimonials {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        uri
        testimonialsFieldOptions {
          testimonialAuthorDesignation
          testimonialAuthorCompany

        }
      }
    }
  }
`;

export const GET_COMPANY_BANNER = gql`
query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
    }
  }
}
`;

export const GET_COMPANY_ABOUT = gql`
  query GetCompanyPage {
    page(id: "company", idType: URI) {
      companyPageAboutSection {
        aboutUsImage {
          node {
            sourceUrl
          }
        }
        aboutUsTitle
        aboutUsContent
      }
    }
  }
`;


export const GET_COMPANY_HISTORY = gql`
  query GetCompanyHistorySection {
  page(id: "company", idType: URI) {
    companyPageHistorySection {
      historySectionMainTitle
      historySectionSubTitle
      historySectionContent
    }
  }
}
`;

export const GET_COMPANY_VISION = gql`
query GetCompanyPage {
    page(id: "company", idType: URI) {
      companyPageVisionSection {
        visionTitle
        visionContent
      }
    }
    visions(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
      }
    }
  }
`;

export const GET_COMPANY_SIMPLIFY_SHIPPING = gql`
query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageSimply {
      simplifyShippingTitle
    }
  }
  shippingMethods(where: { orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
}
`;

export const GET_COMPANY_WHO_WE_ARE = gql`
query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageWhoWeAreSection {
      whoWeAreTitle
      whoWeAreContent
      ourPurposeTitle
      ourPurposeIcon {
        node {
          sourceUrl
        }
      }
      ourPurposeContent
      ourVisionTitle
      ourVisionIcon {
        node {
          sourceUrl
        }
      }
      ourVisionContent
    }
  }
}
`;

export const GET_COMPANY_OUR_VALUES = gql`query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageOurValuesSection {
      ourValuesTitle
      ourValuesImage1 {
        node {
          sourceUrl
        }
      }
      ourValuesImage2 {
        node {
          sourceUrl
        }
      }
    }
  }
  values(where: { orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
}
`;

export const GET_COMPANY_KEY_FACTS = gql`query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageKeyFactsSection {
      keyFactsTitle
      keyFactsBackgroundImage {
        node {
          sourceUrl
        }
      }
    }
  }
  keyFacts(where: { orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
    }
  }
}
`;

export const GET_COMPANY_GLOBAL_NETWORK = gql`
query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageOurGlobalNetworkSection {
      ourGlobalNetworkTitle
      ourGlobalNetworkContent
      ourGlobalNetworkBox1Text1
      ourGlobalNetworkBox1Text2
      ourGlobalNetworkBox2Text1
      ourGlobalNetworkBox2Text2
      ourGlobalNetworkBox3Text1
      ourGlobalNetworkBox3Text2
    }
  }
}
`;

export const GET_COMPANY_CERTIFICATION = gql`
query GetCompanyPage {
  page(id: "company", idType: URI) {
    companyPageCertifications {
      certificationMainTitle
      certificationSubTitle1
      certificationContent1
      certificationSubTitle2
      certificationContent2
      certificationSubTitle3
      certificationContent3
    }
  }
  certifications(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  partners(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const GET_COMPANY_LOCATION = gql`
query GetOfficeLocations($count: Int!, $after: String, $search: String) {
  officeLocations(
    first: $count
    after: $after
    where: {
      search: $search
      orderby: { field: DATE, order: ASC }
    }
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      title
      officeLocationsOptions {
        address
        phoneNumber
        emailAddress
        latitude
        longitude
        country {
          nodes {
            id
            name
            ... on Country {
              countriesOptions {
                countryFlag {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;

export const GET_SERVICES_PAGE = gql`
query GetServicePage {
  page(id: "services", idType: URI) {
    servicesPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
      pageContent
    }
    servicePageOtherTopicsSection {
      otherTopicsMainTitle
      topic1Title
      topic1Image {
        node {
          sourceUrl
        }
      }
      topic1Link {
        nodes {
          uri
        }
      }
      topic2Title
      topic2Image {
        node {
          sourceUrl
        }
      }
      topic2Link {
        nodes {
          uri
        }
      }
      topic3Title
      topic3Image {
        node {
          sourceUrl
        }
      }
      topic3Link {
        nodes {
          uri
        }
      }
    }
  }
  services(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
      id
    }
  }
}
`;


export const GET_SERVICE_WITH_SUBSERVICES = gql`
  query GetServiceWithSubServices($uri: ID!) {
  service(id: $uri, idType: URI) {
    id
    title
    content
    servicesPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
    }
    servicePageOtherTopicsSection {
      otherTopicsMainTitle
      topic1Title
      topic1Image {
        node {
          sourceUrl
        }
      }
      topic1Link {
        nodes {
          uri
        }
      }
      topic2Title
      topic2Image {
        node {
          sourceUrl
        }
      }
      topic2Link {
        nodes {
          uri
        }
      }
      topic3Title
      topic3Image {
        node {
          sourceUrl
        }
      }
      topic3Link {
        nodes {
          uri
        }
      }
    }
    children {
      nodes {
        ... on Service {
          id
          title
          content
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}

`;


export const GET_SOLUTIONS_PAGE = gql`
query GetSolutionsPage {
  page(id: "solutions", idType: URI) {
    solutionsPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
      pageContent
    }
    solutionsPageOtherTopicsSection {
      otherTopicsMainTitle
      topic1Title
      topic1Image {
        node {
          sourceUrl
        }
      }
      topic1Link {
        nodes {
          uri
        }
      }
      topic2Title
      topic2Image {
        node {
          sourceUrl
        }
      }
      topic2Link {
        nodes {
          uri
        }
      }
      topic3Title
      topic3Image {
        node {
          sourceUrl
        }
      }
      topic3Link {
        nodes {
          uri
        }
      }
    }
  }
  solutions(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
      id
    }
  }
}
`;

export const GET_SOLUTIONS_WITH_SUBSOLUTIONS = gql`
  query GetSolutionsWithSubSolutions($uri: ID!) {
    solution(id: $uri, idType: URI) {
      id
      title
      content
      solutionsSinglePageBannerSection {
        bannerImage {
          node {
            sourceUrl
          }
        }
        bannerTitle
      }
      solutionsPageOtherTopicsSection {
        otherTopicsMainTitle

        topic1Title
        topic1Image {
          node {
            sourceUrl
          }
        }
        topic1Link {
          nodes {
            uri
          }
        }

        topic2Title
        topic2Image {
          node {
            sourceUrl
          }
        }
        topic2Link {
          nodes {
            uri
          }
        }

        topic3Title
        topic3Image {
          node {
            sourceUrl
          }
        }
        topic3Link {
          nodes {
            uri
          }
        }
      }
      children {
        nodes {
          ... on Solution {
            id
            title
            content
            uri
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;


export const GET_RESOURSES_PAGE = gql`
query GetResourcesPage {
  page(id: "resources", idType: URI) {
    resourcesPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
    }
    resourcesPageNewsSection {
      newsSectionTitle
      newsSectionContent
    }
    resourcesPageCaseStudyFAQSections {
      caseStudiesTitle
      faqTitle
    }
    resourcesPageDownloadsSection {
      downloadsSectionTitle
      downloadSectionContent
      brochureTitle
      brochureContent
      brochureFile {
        node {
          sourceUrl
        }
      }
      serviceGuidesTitle
      serviceGuidesContent
      serviceGuidesFile {
        node {
          sourceUrl
        }
      }
      whitePapersTitle
      whitePapersContent
      whitePapersFile {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const GET_RECENT_NEWS = gql`
query GetRecentPosts($count: Int) {
  posts(first: $count, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      id
      title
      excerpt
      date
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const GET_NEWS_CATEGORIES = gql`query GetPostCategories {
  categories {
    nodes {
      id
      name
      slug
      uri
      description
    }
  }
}
`

export const GET_NEWS_BY_CATEGORY = gql`
  query GetPostsByCategorySlug(
    $slug: String!
    $catId: ID!
    $count: Int!
    $after: String
    $search: String
    $isAll: Boolean!
  ) {
    posts(
      first: $count
      after: $after
      where: { categoryName: $slug, search: $search, orderby: { field: DATE, order: DESC } }
    ) @skip(if: $isAll) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        uri
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }

    allPosts: posts(
      first: $count
      after: $after
      where: { search: $search, orderby: { field: DATE, order: DESC } }
    ) @include(if: $isAll) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        uri
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }

    category(id: $catId, idType: SLUG) @skip(if: $isAll) {
      totalCount: count
    }

    allPostsCount
  }
`;





export const GET_CASE_STUDIES = gql`
  query GetCaseStudies($count: Int) {
    caseStudies(first: $count) {
      nodes {
        id
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        caseStudiesOptions {
          customerDescription
          caseStudyPersonName
          caseStudyPersonDesignation
          caseStudyPersonImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;


export const GET_FAQS = gql`
  query SearchFAQs($search: String!) {
    faqs(where: { search: $search }) {
      nodes {
        title
        content
      }
    }
  }
`;

export const GET_NEWS_DETAIL = gql`
query GetPostDetailsByID($id: ID!) {
  post(id: $id, idType: ID) {
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
}
`


export const GET_RELATED_POSTS_BY_ID = gql`
  query GetRelatedPostsByID($categorySlug: String!, $excludePostId: ID!) {
    posts(
      where: {
        categoryName: $categorySlug
        notIn: [$excludePostId]
      }
      first: 3
    ) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        uri
      }
    }
  }
`;


export const GET_SINGLE_CASE_STUDY = gql`
  query GetCaseStudy($slug: ID!) {
  caseStudy(id: $slug, idType: SLUG) {
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    caseStudiesOptions {
      caseStudyImage {
        node {
          sourceUrl
        }
      }
      customerDescription
      customerLocation
      intro
      challenges
      solutions
      keytakeaways
    }
  }
}

`;


export const GET_TECHNOLOGY_PAGE = gql`
query GetTechnologyPage {
  page(id: "technology", idType: URI) {
    technologyPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
      pageContent
    }
    technologyPageOtherTopicsSection {
      otherTopicsMainTitle
      topic1Title
      topic1Image {
        node {
          sourceUrl
        }
      }
      topic1Link {
        nodes {
          uri
        }
      }
      topic2Title
      topic2Image {
        node {
          sourceUrl
        }
      }
      topic2Link {
        nodes {
          uri
        }
      }
      topic3Title
      topic3Image {
        node {
          sourceUrl
        }
      }
      topic3Link {
        nodes {
          uri
        }
      }
    }
  }
  technologies(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
      id
    }
  }
}
`;

export const GET_TECHNOLOGY_DETAILS_BY_URI = gql`
  query GetTechnologyDetailsByURI($uri: ID!) {
    technology(id: $uri, idType: URI) {
      ... on Technology {
        title
        content
        technologySinglePageBannerSection {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannerTitle
        }
        technologySinglePageOptions {
          subTitle
        }
        children {
          nodes {
            ... on Technology {
              id
              title
              content
              children {
                nodes {
                  ... on Technology {
                    id
                    title
                    content
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;



export const GET_CAREERS_PAGE = gql`
query GetCareersPage {
  page(id: "careers", idType: URI) {
    careersPageBannerSection {
      bannerImage {
        node {
          sourceUrl
        }
      }
      bannerTitle
    }
    careersPageSection1 {
      mainTitle
      subTitle
      content
      image {
        node {
          sourceUrl
        }
      }
    }
    careersPageMeetOur {
      meetOurPeopleTitle
      meetOurPeopleContent
    }
    careersPageJobsSection {
      jobSectionMainTitle
      jobSectionSubTitle
      jobSectionBottomContent
    }
    careersPageFind {
      openPositionTitle
    }
    careersPageWhyJoinUsSection {
      whyJoinUsTitle
      whyJoinUsContent
    }
    careersPageWeAreLookingForSection {
      title
      number1
      number2
      number3
      number4
      number5
      rightSideContent
    }
  }
  peoples(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      peoplesOptions {
        videoUrl
      }
    }
  }
  jobCategories {
    nodes {
      name
      description
    }
  }
  jobLocations {
    nodes {
      name
    }
  }
  careerAdvantages(where: { parentIn: [0], orderby: { field: DATE, order: ASC } }) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`

export const GET_ALL_JOB_OPENINGS = gql`
  query GetAllJobs($search: String) {
    jobOpenings(
      where: {
        parentIn: [0]
        orderby: { field: DATE, order: ASC }
        search: $search
      }
    ) {
      nodes {
        id
        title
        date
        uri
        jobOpeningsOptions {
          jobLocation {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_JOB_OPENINGS_BY_CATEGORY = gql`
  query GetJobsByCategory($search: String, $categorySlug: String!) {
    jobOpenings(
      where: {
        parentIn: [0]
        orderby: { field: DATE, order: ASC }
        search: $search
        taxQuery: {
          taxArray: [
            { taxonomy: JOBCATEGORY, field: SLUG, terms: [$categorySlug] }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        date
        jobOpeningsOptions {
          jobLocation {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_JOB_OPENINGS_BY_LOCATION = gql`
  query GetJobsByLocation($search: String, $locationSlug: String!) {
    jobOpenings(
      where: {
        parentIn: [0]
        orderby: { field: DATE, order: ASC }
        search: $search
        taxQuery: {
          taxArray: [
            { taxonomy: JOBLOCATION, field: SLUG, terms: [$locationSlug] }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        date
        jobOpeningsOptions {
          jobLocation {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_JOB_OPENINGS_BY_BOTH = gql`
  query GetJobsByBoth($search: String, $locationSlug: String!, $categorySlug: String!) {
    jobOpenings(
      where: {
        parentIn: [0]
        orderby: { field: DATE, order: ASC }
        search: $search
        taxQuery: {
          relation: AND
          taxArray: [
            { taxonomy: JOBLOCATION, field: SLUG, terms: [$locationSlug] }
            { taxonomy: JOBCATEGORY, field: SLUG, terms: [$categorySlug] }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        date
        jobOpeningsOptions {
          jobLocation {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;




export const GET_JOB_POST_DETAILS_BY_ID = gql`
  query GetJobPostDetailsByID($uri: ID!) {
    jobOpening(id: $uri, idType: URI) {
      title
      jobOpeningsOptions {
        bannerImage {
          node {
            sourceUrl
          }
        }
        jobLocation {
          nodes {
            name
          }
        }
        jobCategory {
          nodes {
            name
          }
        }
        keyResponsibilities
        requirements
        summary
        whatWeOffer
        applicationEmail
      }
    }
  }
`;

export const GET_SUPPORT_PAGE = gql`
  query GetSupportPage {
    page(id: "support", idType: URI) {
      supportPageBannerSection {
        bannerImage {
          node {
            sourceUrl
          }
        }
        bannerTitle
      }
      supportPageContentSection {
        mainTitle
        content
        image {
          node {
            sourceUrl
          }
        }
      }
      supportPageContactFormSection {
        generalInquiriesFormTitle
        generalInquiriesFormEmail
        quoteRequestFormTitle
        quoteRequestFormEmail
      }
    }
  }
`;


export const GET_OFFICE_LOCATIONS = gql`
  query GetOfficeLocations($count: Int!, $after: String, $search: String) {
    officeLocations(
      first: $count
      after: $after
      where: {
        search: $search
        orderby: { field: DATE, order: ASC }
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        uri
        officeLocationsOptions {
          address
          phoneNumber
          emailAddress
          latitude
          longitude
          country {
            nodes {
              id
              name
              ... on Country {
                countriesOptions {
                  countryFlag {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;




export const GET_COUNTRY_PAGE = gql`
  query GetOfficeLocationByURI($uri: ID!) {
    officeLocation(id: $uri, idType: URI) {
      title
      officeLocationsOptions {
        address
        phoneNumber
        emailAddress
        country {
          nodes {
            name
          }
        }
        officeLocationImage1 {
          node {
            sourceUrl
          }
        }
        officeLocationImage2 {
          node {
            sourceUrl
          }
        }
        officeLocationImage3 {
          node {
            sourceUrl
          }
        }
        officeLocationBannerImage {
          node {
            sourceUrl
          }
        }
        officeLocationBannerCaption
        officeLocationServices
        officeLocationFlyer {
          node {
            sourceUrl
          }
        }
      }
    }
    officeLocations(first: 100) {
      nodes {
        id
        title
        uri
        countries {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`;


export const GET_MENU_ITEMS = gql`
  query GetMenuItemsByMenuId {
    menu(id: "Main Navigation", idType: NAME) {
      id
      name
      menuItems(first: 999) {
        nodes {
          id
          label
          url
          uri
          parentId
          order
        }
      }
    }
  }
`;


export const GET_QUALITY_AND_SUSTAINABILITY_PAGE = gql`
  query GetQualityAndSustainabilityPage {
    pageBy(uri: "quality-sustainability") {
      title
      qualityandsustainabilityPageBannerSection {
        bannerImage {
          node {
            sourceUrl
          }
        }
        bannerTitle
      }
      qualitySustainabilityPageQualitySections {
        qualitySectionMainTitle
        qualitySectionSubTitle1
        qualitySectionContent1
        qualitySectionImage1 {
          node {
            sourceUrl
          }
        }
        qualitySectionSubTitle2
        qualitySectionContent2
        qualitySectionImage2 {
          node {
            sourceUrl
          }
        }
        qualitySectionBottomContent
        qualitySection2Title
        qualitySection3Title
        qualitySection3ListPoints
      }
      qualitySustainabilityPageSustainabilitySection {
        sustainabilitySectionMainTitle
        sustainabilitySectionSubTitle1
        sustainabilitySectionContent1
        sustainabilitySectionImage1 {
          node {
            sourceUrl
          }
        }
        sustainabilitySectionSubTitle2
        sustainabilitySectionContent2
        sustainabilitySectionImage2 {
          node {
            sourceUrl
          }
        }
      }
      qualitySustainabilityPageAreasofCommitment {
        areasOfCommitmentSectionMainTitle
        areasOfCommitmentSectionSubTitle1
        areasOfCommitmentSectionContent1
        areasOfCommitmentSection1MainImage {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSectionSubImage1 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection1SubImage2 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection1SubImage3 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection1SubImage4 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection2SubTitle
        areasOfCommitmentSection2Content
        areasOfCommitmentSection2MainImage {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection2SubImage1 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection2SubImage2 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection2SubImage3 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection2SubImage4 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection3SubTitle
        areasOfCommitmentSection3Content
        areasOfCommitmentSection3MainImage {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection3SubImage1 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection3SubImage2 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection3SubImage3 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection3SubImage4 {
          node {
            sourceUrl
          }
        }
        areasOfCommitmentSection4SubTitle
        areasOfCommitmentSection4Content
        areasOfCommitmentSection4MainImage {
          node {
            sourceUrl
          }
        }
      }
      qualitySustainabilityPageCalculatorSection {
        calculatorSectionTitle
        calculatorSectionImage {
          node {
            sourceUrl
          }
        }
        calculatorSectionContent
      }
      qualitySustainabilityPageOurReportingSection {
        ourReportingSectionTitle
        ourReportingSectionContent
        ourReportingSectionImage {
          node {
            sourceUrl
          }
        }
      }
      qualitySustainabilityPageEsgCodeOfConductSection {
        codeOfConductTitle
        codeOfConductContent
        codeOfConductImage {
          node {
            sourceUrl
          }
        }
      }
    }
    qualities(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    sustainabilities(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_CSR_YEARS = gql`
query GetCsrYears {
  csrYears {
    nodes {
      name
      slug
      id
    }
  }
}`;

export const GET_CSR_BY_YEAR = gql`
query GetCSRByYear($yearSlug: [String]) {
  csrs(
    where: {
      taxQuery: {
        taxArray: [
          {
            taxonomy: CSRYEAR
            field: SLUG
            terms: $yearSlug
          }
        ]
      }
    }
  ) {
    nodes {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

export const GET_MY_BLACKBOX_FREIGHT_PAGE = gql`
  query GetMyBlackboxFreightPage {
    pageBy(uri: "my-blackbox-freight") {
      title
      blackboxFreightPageBannerSection {
        bannerImage {
          node {
            sourceUrl
          }
        }
        bannerTitle
      }
      shipmentManagementSection {
        smSubTitle
        smMainTitleFirstPart
        smMainTitleSecondPart
        smContent
        smImage {
          node {
            sourceUrl
          }
        }
      }
      controlTowerSection {
        ctTitle
        ctContent
      }
      shipmentVisibilitySection {
        svTitle
        svContent
      }
      eDocsSection {
        edTitle
        edContent
        edImage {
          node {
            sourceUrl
          }
        }
      }
      supplyChainIntegrationSection {
        sciTitle
        sciContent
      }
      freightIndexTrendsSection {
        fitTitle
        fitContent
        fitImage {
          node {
            sourceUrl
          }
        }
      }
      toolsReportsAnalyticsSection {
        traTitle
        traContent
        traImage {
          node {
            sourceUrl
          }
        }
      }
    }

    shipmentVisibilities(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }

    freightIndexTrends(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }

    toolsReports(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;


export const GET_FOOTER_MENU_ITEMS = gql`
  query GetFooterMenuItems {
    menu(id: "Footer Menu", idType: NAME) {
      id
      name
      menuItems(first: 999) {
        nodes {
          id
          label
          url
          uri
          parentId
          order
        }
      }
    }
  }
`;
export const GET_GENERAL_PAGES = gql`
  query GetGeneralPages($uri: String!) {
    pageBy(uri: $uri) {
      title
      blackboxFreightPageBannerSection {
        bannerImage {
          node {
            sourceUrl
          }
        }
        bannerTitle
      }
      content
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      nodes {
        id
        name
        slug
        countriesOptions {
          countryFlag {
            node {
              sourceUrl
            }
          }  
        }
      }
    }
  }
`;


export const GET_OFFICE_LOCATIONS_BY_COUNTRY = gql`
  query GetOfficeLocationsByCountry($slug: [String]) {
    officeLocations(
      where: {
        taxQuery: {
          taxArray: [
            { taxonomy: COUNTRY, field: SLUG, terms: $slug }
          ]
        }
      }
    ) {
      nodes {
        id
        title
        uri
      }
    }
  }
`;

export const GET_OFFICE_LOCATION_BY_URI = gql`
  query GetOfficeLocationByURI($uri: ID!) {
    officeLocation(id: $uri, idType: URI) {
      title
      officeLocationsOptions {
        address
        phoneNumber
        emailAddress
        country {
          nodes {
            id
            name
            ... on Country {
              countriesOptions {
                countryFlag {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;



export const GET_JOB_CATEGORIES = gql`
query GetJobCategories {
  jobCategories {
    nodes {
      id
      name
      slug
    }
  }
}
`;

export const GET_JOB_LOCATIONS = gql`
query GetJobLocations {
  jobLocations {
    nodes {
      id
      name
      slug
    }
  }
}
`;

export const GLOBAL_SEARCH = gql`
  query GlobalSearch($search: String!) {
    posts(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
    pages(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
    services(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
    solutions(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
    caseStudies(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
    technologies(where: { search: $search }, first: 100) {
      nodes {
        id
        title
        uri
      }
    }
  }
`;


export const GET_DOWNLOADS = gql`
query GetDownloadsByCategory($slug: [String!]) {
  downloads(
    where: {
      taxQuery: {
        taxArray: [
          { taxonomy: DOWNLOADCATEGORY, field: SLUG, terms: $slug }
        ]
      }
    }
  ) {
    nodes {
      title
      downloadOptions {
        downloadFile {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}

`