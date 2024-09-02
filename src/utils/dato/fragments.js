export const IMAGE_CONTENT_FRAGMENT = `
  fragment ImageContentFragment on FileField {
    alt
    mimeType
    url
    id
    title
    focalPoint {
      x
      y
    }
    filename
    width
    height
  }
`;

export const LINK_CONTENT_FRAGMENT = `
  fragment LinkContentFragment on LinkRecord {
    content
    linkType
    linkedPage {
      ... on VariablePageRecord {
        id
        urlSlug
      }
      ... on JobPostingRecord {
        id
        urlSlug
        urlPrefix
      }
    }
    url
  }
`;

export const SEO_CONTENT_FRAGMENT = `
  fragment SeoContentFragment on SeoField {
    title
    description
    image {
      url
      filename
      id
    }
  }
`;

export const TEXT_IMAGE_PAIR_GROUP_FRAGMENT = `
  fragment TextImagePairGroupFragment on TextImagePairGroupRecord {
    id
    addBackground
    items {
      headline
      content {
        blocks
        links
        value
      }
      image {
        ...ImageContentFragment
      }
      link {
        ...LinkContentFragment
      }
    }
    _modelApiKey
  }
`;

export const CTA_BOX_FRAGMENT = `
  fragment CtaBoxFragment on CtaBoxRecord {
    _modelApiKey
    id
    headline
    cardFooterText
    links {
      ...LinkContentFragment
    }
    cta {
      ...LinkContentFragment
    }
  }
`;

export const CHAPTER_HEADLINE_FRAGMENT = `
  fragment ChapterHeadlineFragment on ChapterHeadlineRecord {
    _modelApiKey
    title
    secondLine
    firstLine
  }
`;

export const SECTION_HERO_FRAGMENT = `
  fragment SectionHeroFragment on SectionHeroRecord {
    id
    headline
    subtitle
    image {
      ...ImageContentFragment
    }
    _modelApiKey
  }
`;

export const TEXT_FRAGMENT = `
  fragment TextFragment on TextRecord {
    id
    content {
      blocks
      value
    }
    _modelApiKey
  }
`;

export const FAQ_GROUP_FRAGMENT = `
  fragment FaqGroupFragment on FaqGroupRecord {
    faqs {
      question
      answer {
        blocks
        links
        value
      }
    }
    alignment
    _modelApiKey
  }
`;

export const FACT_BOX_GROUP_FRAGMENT = `
  fragment FactBoxGroupFragment on FactBoxGroupRecord {
    id
    alignment
    facts {
      title
      subtitle
      number
    }
    _modelApiKey
  }
`;

export const GALLERY_FRAGMENT = `
  fragment GalleryFragment on GalleryRecord {
    images {
      ...ImageContentFragment
    }
    _modelApiKey
  }
`;

export const IMAGE_QUOTE_GROUP_FRAGMENT = `
  fragment ImageQuoteGroupFragment on ImageQuoteGroupRecord {
    _modelApiKey
    quotes {
      quote
      author
      image {
        ...ImageContentFragment
      }
    }

  }
`;

export const CONTENT_FRAGMENT = `
  fragment ContentFragment on VariablePageModelContentField {
    ...SectionHeroFragment
    ...TextImagePairGroupFragment
    ...TextFragment
    ...CtaBoxFragment
    ...ChapterHeadlineFragment
    ...FaqGroupFragment
    ...FactBoxGroupFragment
    ...GalleryFragment
    ...ImageQuoteGroupFragment
    ... on BigTextRecord {
      text
      author
      _modelApiKey
    }
    ... on FeatureImageRecord {
      _modelApiKey
      title
      image {
        ...ImageContentFragment
      }
    }
    ... on ArtworkSliderRecord {
      _modelApiKey
      artworks {
        title
        mainImage {
          ...ImageContentFragment
        }
      }
    }
  }
`;
