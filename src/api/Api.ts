/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddAppRequest {
  /**
   * AppType of the app
   * @example "ios"
   */
  appType: 'ios' | 'android' | 'macos'
  /**
   * Code of the country user searched for the app
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  countryCode: string
  /** Adding this app as a competitor or not */
  isCompetitor?: boolean
  /** Unique identifier of an app on Apple or Google stores */
  storeId: string
}

export interface AddTagRequest {
  /** ID of tag */
  tagId?: string
  /** Tag title to add */
  title?: string
}

export interface AddUserRequest {
  /** Email of user */
  email: string
}

export interface Alert {
  /** Type of alert */
  alertType: 'reviews'
  /** Description of alert */
  description?: string
  /** How the alert will be distributed */
  distributionType: 'slack' | 'email'
  id?: string
  /** Interval of review */
  interval: 'realtime' | 'once-day' | 'once-week'
  /** Settings of this alert if alert type is review */
  reviewFilter?: ReviewFilter
  /**
   * Title of alert
   * @minLength 2
   * @maxLength 10
   * @example "New notifications"
   */
  title: string
}

export interface Annotation {
  /** Alt text of annotation */
  altText?: string
  /** Bootstrap icon name if there is an icon */
  iconName?: string
  /** Url of the icon if available */
  iconUrl?: string
  id: string
  isDeletable?: boolean
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Title of annotation */
  title: string
  /** Type of annotation */
  type: 'stamp' | 'label' | 'sentiment' | 'tag'
}

export interface App {
  /** App type */
  appType: 'ios' | 'android' | 'macos'
  /** Bundle id of app */
  bundleId: string
  /** Main country code of the app (Apple apps only) */
  countryCode?: string
  /** Main country name of the app (Apple apps only) */
  countryName?: string
  /** Details about the app */
  data?: AppData
  /** Name of developer */
  developerName: string
  /** Icon url of app */
  icon: string
  /** Internal id of app */
  id: string
  /** If app is our competitor or our own app */
  isCompetitor: boolean
  /** If this app is already being followed or not */
  isFollowing: boolean
  /** Shows if an app is verified for the user or not by using store connections. This field applies only to my apps. */
  isVerified: boolean
  /** Platform of app */
  platform: 'apple' | 'android'
  /** State of app */
  state: string
  /** Store ID of app */
  storeId: string
  /** Title of app */
  title: string
}

export interface AppData {
  /** IOSType */
  TVScreenshots?: string[]
  /** AndroidPlatform: Getting only for AndroidPlatform and default value for iOS is false. Therefore, not used in the UI */
  adSupported?: boolean
  /** IOSType */
  advisories?: string[]
  /** AndroidPlatform */
  androidVersion?: string
  /** AndroidPlatform */
  androidVersionMin?: number
  /** Internally generated id of belonged app. This is empty for app profiles */
  appId: string
  /** App type */
  appType: 'ios' | 'android' | 'macos'
  /** IOSType (originally int) */
  appleProjectId?: string
  /** AndroidPlatform */
  available?: boolean
  /** BundleID of app */
  bundleId: string
  /** IOSType */
  contentAdvisoryRating?: string
  /** IOS and Android */
  contentRating?: string
  /** AndroidPlatform */
  contentRatingDescription?: string
  /** us */
  countryCode: string
  /** IOSType */
  currentVersionReleaseDate?: string
  /** IOSType and AndroidPlatform */
  description: string
  /** AndroidPlatform */
  descriptionHTML?: string
  developer?: AppDeveloper
  /** AndroidPlatform */
  familyGenre?: string
  /** AndroidPlatform */
  familyGenreID?: string
  /** IOSType (iosUniversal, null) */
  features?: string[]
  /** IOSType */
  fileSizeBytes?: string
  /** IOSType */
  firstReleaseDate?: string
  generatedData?: GeneratedAppData
  /** AndroidPlatform */
  headerImage?: string
  /** AndroidPlatform */
  iAPOffers?: boolean
  /** AndroidPlatform */
  iAPRange?: string
  /** IOSType and AndroidPlatform */
  icon: string
  /** Internal app id of this particular app details */
  id: string
  /** AndroidPlatform: (10M$) Showed only install max value on app details. This one is not used */
  installs?: string
  /** AndroidPlatform: (21.123.123) */
  installsMax?: number
  /** AndroidPlatform: (10.000.000) Showed only install max value on app details. This one is not used */
  installsMin?: number
  /** IOSType */
  isGameCenterEnabled?: boolean
  /** IOSType (software) */
  kind?: string
  /** us */
  languageCode: string
  /** IOSType */
  languageCodesISO2A?: string[]
  /** Used for app profiles */
  lastDataSyncDate?: string
  /** Used for app profiles */
  lastReviewSyncDate?: string
  latestReviews?: RawReview[]
  /** IOSType */
  minimumOsVersion?: string
  /** ID of belonged organization. Empty if this is an app profile */
  organizationId?: string
  /** AndroidPlatform */
  permissions?: Record<string, string[]>
  pricing?: AppPricing
  primaryCategory: Category
  primaryCategoryId: string
  primaryCategoryName: string
  /** AndroidPlatform */
  privacyPolicy?: string
  /** ID of belonged project. Empty if this is an app profile */
  projectId?: string
  rating?: AppRating
  /** AndroidPlatform */
  recentChangesHTML?: string
  /** IOSType: ReleaseNotes, AndroidPlatform: RecentChanges */
  releaseNotes?: string
  /** AndroidPlatform */
  releasedTextForAndroid?: string
  /** AndroidPlatform */
  reviewsTotalCount?: number
  /** IOSType: ScreenshotUrls, AndroidPlatform: Screenshots */
  screenshots?: string[]
  secondaryCategory?: Category
  secondaryCategoryId?: string
  secondaryCategoryName?: string
  /** AndroidPlatform */
  similarURL?: string
  /** Url */
  storeUrl?: string
  /** AndroidPlatform */
  summary?: string
  /** IOSType */
  supportedDevices?: string[]
  /** IOSType */
  tabletScreenshots?: string[]
  /** IOSType: TrackName, AndroidPlatform: Title */
  title: string
  /** IOSType */
  version?: string
  /** AndroidPlatform */
  video?: string
  /** AndroidPlatform */
  videoImage?: string
}

export interface AppDeveloper {
  /** Postal address of developer */
  address?: string
  /** Email of app developer */
  email?: string
  /** ID of app developer */
  id: string
  /** Name of app developer */
  name: string
  /** URL of store page (apple or google) of developer */
  storeUrl?: string
  /** Website of app developer */
  website?: string
}

export interface AppPricing {
  /** Currency name */
  currency?: string
  /** Formatted price of app */
  formattedPrice?: string
  /** True if app is free */
  isFree?: boolean
  /** Price of app */
  price?: number
}

export interface AppRating {
  averageUserRating?: number
  averageUserRatingForCurrentVersion?: number
  scoreText?: string
  userRatingCount?: number
  userRatingCountForCurrentVersion?: number
}

export interface AppSearchResult {
  /** Type of app */
  appType: 'ios' | 'android' | 'macos'
  /** Code of the country user searched for the app */
  countryCode: string
  developerName: string
  /** Icon of the app */
  iconUrl: string
  /** Unique identifier of an app on Apple or Google stores */
  storeId: string
  /** AppType of the app */
  title: string
}

export interface AppleIntegrationRequest {
  /** Issuer ID */
  issuerId: string
  /** P8 file contents for private key */
  keyFile: MultipartFileHeader
  /** Key ID */
  keyId: string
}

export interface BlogCategory {
  coverImage: string
  description: string
  name: string
  /** Slug is also ID of this record */
  slug: string
}

export interface BlogPost {
  blogTagIds?: string[]
  categoryId: string
  /** @minLength 5 */
  content: string
  coverImage: string
  creDate: string
  id: string
  publishDate?: string
  /**
   * @minLength 5
   * @maxLength 250
   */
  slug: string
  state: 'draft' | 'published'
  /** @minLength 5 */
  summary: string
  /**
   * @minLength 5
   * @maxLength 250
   */
  title: string
  updateDate: string
}

/** Use for creating or updating a blog post */
export interface BlogPostRequest {
  category: string
  /** @minLength 5 */
  content: string
  /** ID of form */
  id?: string
  image: string
  publishDate?: string
  state: 'published' | 'draft'
  /** @minLength 5 */
  summary: string
  tags: string
  /**
   * @minLength 5
   * @maxLength 250
   */
  title: string
}

export interface BlogTag {
  coverImage: string
  description: string
  name: string
  /** Slug is also ID of this record */
  slug: string
  /** Page title for SEO */
  title: string
}

export interface CampaignURLRequest {
  /** Campaign Content */
  campaignContent: string
  /** Campaign Id */
  campaignId?: string
  /** Campaign Name */
  campaignName?: string
  /** Campaign Term */
  campaignTerm?: string
  /** URL to Typedive web page */
  pageUrl: string
}

export interface CampaignUrl {
  campaignUrl: string
  platform: string
}

export interface Category {
  appCategory?: boolean
  /** AndroidPlatform */
  forFamily?: boolean
  id?: string
  isOverall?: boolean
  name?: string
  /** ApplePlatform */
  newsStandApp?: boolean
  /** ApplePlatform */
  parentId?: string
  /** Platform of app */
  platform?: string
  topChartCategory?: boolean
}

export interface CheckboxFilter {
  isChecked?: boolean
  isVisible?: boolean
  placeholderText: string
  title: string
}

export interface CloseTaskRequest {
  /** ID of organization the task belongs to */
  organizationId: string
  /** ID of project the task belongs to */
  projectId?: string
  /** ID of task */
  taskId:
    | 'organization_name'
    | 'apple_integration'
    | 'google_integration'
    | 'invite_users'
    | 'my_ios_app'
    | 'my_android_app'
    | 'my_macos_app'
    | 'add_competitors'
}

/** Country */
export interface Country {
  /**
   * ID of Country (ISO 3166-1 alpha-2)
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  id: string
  /**
   * Name of country
   * @minLength 4
   * @example "Turkey"
   */
  name: string
  /**
   * Territory code of Country (ISO 3166-1 alpha-3)
   * @minLength 3
   * @maxLength 3
   * @example "TUR"
   */
  territoryCode: string
}

/** Country Lists */
export interface CountryLists {
  apple: Country[]
  google: Country[]
}

export interface DeleteOrganizationResult {
  status?: string
}

/** General Error type of API */
export interface Error {
  /**
   * Code of error which is always same with the http status code
   * @default 400
   * @example 400
   */
  code: number
  /** Explanation of error */
  details?: ProjectStateExplanation
  /**
   * Message about the error
   * @example "an error occurred"
   */
  message?: string
}

export interface FilterRecord {
  /** ID of filter record */
  id: string
  /** Title of filter record */
  title: string
}

export interface GeneratedAppData {
  appSummary?: string
  /** Version of app during data generation */
  appVersion?: string
  comparisonWithOtherApps?: string
  /** Date of data generation */
  generationDate?: string
  marketingSlogan?: string
  metaDescription?: string
  userEvaluation?: string
}

export interface GoogleIntegrationRequest {
  /** Json file contents for private key */
  keyFile?: MultipartFileHeader
}

export interface Integration {
  description: string
  id: string
  /**
   * IntegrationStatus:
   * * connected - Connection is active
   * * not-connected - Connection is not active
   * * coming-soon - This type of connection is not available at this time
   */
  integrationStatus: 'connected' | 'not-connected' | 'coming-soon'
  name: string
}

/** Invitation to a organization */
export interface Invitation {
  /** Date of invitation */
  creDate: string
  /** Email of invited user */
  email: string
  /** Invitation text */
  invitationText: string
  /** Email of person who sent this invitation */
  inviterEmail: string
  /** Name of person who sent this invitation */
  inviterName?: string
  /** ID of person who sent this invitation */
  invitingAccountId: string
  /** ID of invited organization */
  organizationId: string
  /** Name of the invited organizationName */
  organizationName: string
}

export interface InvitationDecision {
  /** 1 for accept 0 for reject */
  decision: '1' | '0'
  /** ID of organization */
  organizationId: string
}

export interface LabelListReportRecord {
  /** Alt text of annotation */
  altText?: string
  /** Bootstrap icon name if there is an icon */
  iconName?: string
  /** Url of the icon if available */
  iconUrl?: string
  id?: string
  label?: Annotation
  numberOfReviews?: number
  ratingAverage?: number
  /** Rating distribution array for this record */
  ratingDistribution?: RatingDistribution[]
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Title of annotation */
  title: string
  /** Type of annotation */
  type: 'stamp' | 'label' | 'sentiment' | 'tag'
}

export interface Language {
  /**
   * ID of language
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  id: string
  /**
   * Name of language
   * @minLength 4
   * @example "Turkish"
   */
  name: string
}

/** Language Lists */
export interface LanguageLists {
  apple: Language[]
  google: Language[]
}

export interface Login {
  /** Display name of user */
  displayName?: string
  /** Email */
  email: string
  /** ID of user */
  id: string
  /** If user is an apptargets admin */
  isAdmin?: boolean
  /** True if this is a new user */
  isFirstTime: boolean
  landingOrganizationId?: string
  landingProjectId?: string
  /** Organization list of user */
  organizations: OrganizationListItem[]
  /** Photo URL of user */
  photoUrl?: string
}

export interface LoginRequest {
  lastOrganizationId?: string
  lastProjectId?: string
}

export interface MultiselectListFilter {
  isVisible?: boolean
  records: FilterRecord[]
  selectedRecordIds: string[]
}

export interface Organization {
  /** If organization has Apple Integration */
  hasAppleIntegration: boolean
  /** If organization has Google Integration */
  hasGoogleIntegration: boolean
  /** ID of organization */
  id: string
  /** Name of organization */
  name: string
  /** Projects under this organization */
  projects: ProjectListItem[]
  /** Open tasks of this organization */
  taskList?: TaskList
  /** Users of this organization */
  users: User[]
}

export interface OrganizationListItem {
  /** ID of organization */
  id: string
  /** Name of organization */
  name: string
  /** Projects under organization */
  projects?: ProjectListItem[]
}

export interface OrganizationRequest {
  /**
   * Name for organization
   * @minLength 3
   * @maxLength 100
   */
  name: string
}

export interface Project {
  /** Apps in this project */
  apps: App[]
  /**
   * Description of project
   * @maxLength 100
   */
  description?: string
  /** True if project has an Android app in my apps */
  hasAndroidApp: boolean
  /** True if project has an iOS app in my apps */
  hasIOSApp: boolean
  /** True if project has an macOS app in my apps */
  hasMacOSApp: boolean
  /** Icon of project */
  icon?: string
  /** ID of project */
  id: string
  /**
   * Name of project
   * @minLength 5
   * @maxLength 100
   */
  name: string
  /** Open tasks of this project */
  taskList?: TaskList
}

export interface ProjectListItem {
  /** Description of project. If project has a description, it's returned. Otherwise, a temporary description is generated by system. */
  description: string
  /** Auto picked icon for project */
  icon?: string
  /** ID of project */
  id: string
  /** Name of project */
  name: string
}

export interface ProjectRequest {
  /**
   * Description of project
   * @maxLength 100
   */
  description?: string
  /**
   * Name of project
   * @minLength 5
   * @maxLength 100
   */
  name: string
}

export interface ProjectStateExplanation {
  /** Text for action button. Button is visible if and only if there is an action text */
  actionText?: string
  /** Visual for error banner */
  banner: string
  /** Description for error banner */
  description: string
  /**
   * ProjectState:
   * * collecting-data - System is still collecting data. No actions required
   * * no-apps - Project has no apps. User should be redirected to My Apps screen
   * * not-following-apps - Project has no competitors. User should be redirected to Competitors screen
   * * no-integration - Organization is not linked to neither Apple nor Google. User should be redirected to Linked Accounts screen
   * * no-apple-integration - Organization is not linked to Apple. User should be redirected to Link Apple Account screen
   * * no-google-integration - Organization is not linked to Google. User should be redirected to Link Google Account screen
   * * app-not-found-on-apple - Searched app is not found on Apple. No actions required
   * * app-not-found-on-google - Searched app is not found on Google. No actions required
   * * not-have-apple-app - Project has no Apple apps in my apps. User should be redirected to My Apps screen
   * * not-have-android-app - Project has no Android apps in my apps. User should be redirected to My Apps screen
   * * not-following-apple-apps - Project has no Apple type of competitors. User should be redirected to Competitors screen
   * * not-following-android-apps - Project has no Android type of competitors. User should be redirected to Competitors screen
   * @example "collecting-data"
   */
  state:
    | 'collecting-data'
    | 'no-apps'
    | 'not-following-apps'
    | 'no-integration'
    | 'no-apple-integration'
    | 'no-google-integration'
    | 'app-not-found-on-apple'
    | 'app-not-found-on-google'
    | 'not-have-apple-app'
    | 'not-have-android-app'
    | 'not-following-apple-apps'
    | 'not-following-android-apps'
  /** Title of error banner */
  title: string
}

export interface RatingDistribution {
  description?: string
  /** Rating value of this record */
  rating?: number
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Value of records */
  value?: number
}

export interface RatingReport {
  data?: RatingReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface RatingReportData {
  description?: string
  noRecordsText?: string
  records?: RatingReportRecord[]
  title?: string
}

export interface RatingReportRecord {
  countryCode: string
  countryName: string
  lastRating?: AppRating
  lastRatingDate: string
  ratings: AppRating[]
}

export interface RawReview {
  /** Google API (31) */
  androidOSVersion?: number
  /** Unique internal ID of app of this Review */
  appId: string
  /**
   * App type
   * @example "ios"
   */
  appType: 'ios' | 'android' | 'macos'
  /** Google API (241) */
  appVersionCode?: number
  /** App Store project id of belonged app (ApplePlatform only) */
  appleProjectId?: string
  /** If Review was received from AppstoreConnect then this is the date of last sync */
  appstoreConnectSyncDate?: string
  /** Name of author of Review */
  author?: string
  /** url of avatar of the reviewer (android only) */
  avatar?: string
  /** Bundle ID of the Review of the app */
  bundleId: string
  /**
   * Country code of Review (apple only)
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  countryCode?: string
  /** Date of when Review is collected into our internal db */
  creDate: string
  /** Description of Review */
  description?: string
  /** Google API (Samsung) */
  deviceManufacturer?: string
  /** Google API (beyond2q) */
  deviceName?: string
  /** Google API (beyond2q (Galaxy S10+)) */
  deviceProductName?: string
  /** Unique id of this Review created for our system */
  id: string
  isFavorite?: boolean
  /** Language code of Review (android only) */
  languageCode?: string
  /** ID of organization this Review is collected for */
  organizationId?: string
  /** ID of project this Review is collected for */
  projectId?: string
  /**
   * Rating of Review
   * @min 1
   * @max 5
   */
  rating: number
  /** Given response to the Review */
  response?: ReviewResponse
  reviewSource?: string
  sentimentAnalysis?: SentimentAnalysis
  sentimentId?: string
  /** ID of this Review in apple or google-play store */
  storeId: string
  tagIds?: string[]
  /** Appstore Connect */
  territory?: string
  /** Google API (0)) */
  thumbsDownCount?: number
  /** Google API (0)) */
  thumbsUpCount?: number
  /** Date of Review */
  timestamp: string
  /** Title of Review (apple only) */
  title?: string
  translatedDescription?: string
  translatedTitle?: string
  /** Is Review useful value (android only) */
  useful?: number
  /** Version of app during this Review */
  version?: string
  /** Vote count value (apple only) */
  voteCount?: string
  /** Vote sum value (apple only) */
  voteSum?: string
}

export interface ReplyReviewRequest {
  /** Reply message to the review */
  message: string
}

/** App Review */
export interface Review {
  annotations?: Annotation[]
  /** Icon url of app */
  appIcon?: string
  /** Unique internal ID of app of this review */
  appId: string
  /**
   * AppleProjectId string `json:"appleProjectId"`                    //App Store project id of belonged app (ApplePlatform only)
   * BundleId string `json:"bundleId" validate:"required"` //Bundle ID of the review of the app
   */
  appName?: string
  /** Name of author of review */
  author?: string
  /** A generated url to search author of the review on Google */
  authorSearchUrl?: string
  /**
   * Country code of review
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  countryCode?: string
  /** Description of review */
  description?: string
  /** ID of review */
  id: string
  isFavorite?: boolean
  /** If the review response is editable or not */
  isResponseEditable?: boolean
  /**
   * Language code of review
   * @minLength 2
   * @maxLength 2
   * @example "tr"
   */
  languageCode?: string
  /**
   * AppType        models.AppType  `json:"appType" binding:"required,oneof=ios android macos" example:"ios"` //Type of App
   * Platform       models.Platform `json:"platform" binding:"required,oneof=apple android"`                  //Platform of app
   */
  organizationId?: string
  /** ID of project */
  projectId?: string
  /**
   * Rating of review
   * @min 1
   * @max 5
   */
  rating: number
  /**
   * CountryName        string                 `json:"countryName" example:"Turkey"`                                     //Country of review
   * LanguageName       string                 `json:"languageName" example:"Turkish"`                                   //Language of review
   * VoteCount          string                 `json:"voteCount"`                                      //Vote count (apple only)
   * VoteSum            string                 `json:"voteSum"`                                        //Vote sum (apple only)
   * CreDate            time.Time              `json:"creDate" validate:"required"`                    //Date of when review is collected into our system
   * Avatar             string                 `json:"avatar"`                                         //Url of avatar of the reviewer (android only)
   * Useful             int                    `json:"useful"`                                         //Number of users who found this review useful (android only)
   * Territory          string                 `json:"territory"`                                      //Territory of reviewer (Appstore Connect)
   * AndroidOSVersion   int64                  `json:"androidOSVersion" example:"31"`                  //Google API
   * AppVersionCode     int64                  `json:"appVersionCode" example:"241"`                   //Google API
   * DeviceName         string                 `json:"deviceName" example:"emre"`                      //Google API
   * DeviceManufacturer string                 `json:"deviceManufacturer" example:"Samsung"`           //Manufacturer of reviewer's device (Google API)
   * DeviceProductName  string                 `json:"deviceProductName" example:"emre (Galaxy S10+)"` //Google API
   * ThumbsUpCount      int                    `json:"thumbsUpCount" minimum:"0"`                      //Number of up votes given to this review (Google API (0))
   * ThumbsDownCount    int                    `json:"thumbsDownCount"  minimum:"0"`                   //Number of down votes given to this review (Google API (0))
   */
  response?: ReviewResponse
  /**
   * ReviewReplyAction:
   * * notAllowed - It's not allowed to reply this review. Reply button will not be visible for this review
   * * limited - We show the reply option but user will be notified about organization should be integrated to apple
   * * allowed - It's allowed to reply this review
   * * replied - Review was replied
   * * pending-approval - Review was replied but pending approval of Apple
   * @example "notAllowed"
   */
  reviewReplyAction: 'notAllowed' | 'limited' | 'allowed' | 'replied' | 'pending-approval'
  /** Sentiment of review */
  sentiment: 'very-positive' | 'positive' | 'neutral' | 'negative' | 'very-negative' | 'none'
  /** Returns a full url which can be used for sharing this review on social media */
  shareUrl: string
  /** Date of review */
  timestamp: string
  /** Title of review (apple only) */
  title?: string
  translatedDescription?: string
  translatedTitle?: string
  /** Version of app during this review */
  version?: string
}

export interface ReviewCountryReport {
  data?: ReviewCountryReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewCountryReportData {
  description?: string
  noRecordsText?: string
  records?: ReviewCountryReportRecord[]
  title?: string
}

export interface ReviewCountryReportRecord {
  /** Country */
  country?: Country
  numberOfReviews?: number
  ratingAverage?: number
  /** Rating distribution array for this record */
  ratingDistribution?: RatingDistribution[]
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
}

export interface ReviewFavoriteRequest {
  /** If the review is favorited or not */
  isFavorite?: boolean
}

export interface ReviewFilter {
  appVersions?: MultiselectListFilter
  apps?: MultiselectListFilter
  countries?: MultiselectListFilter
  favoriteItems?: CheckboxFilter
  labels?: MultiselectListFilter
  languages?: MultiselectListFilter
  numberOfActiveFilters?: number
  ratings?: MultiselectListFilter
  reviewIdFilter?: ModelsStringFilter
  segment?: string
  sentimentsFilter?: MultiselectListFilter
  tags?: MultiselectListFilter
  textSearch?: TextFilter
  unansweredFilter?: CheckboxFilter
}

export interface ReviewKeywordReport {
  data?: ReviewKeywordReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewKeywordReportData {
  description?: string
  noRecordsText?: string
  records?: ReviewKeywordReportRecord[]
  title?: string
}

export interface ReviewKeywordReportRecord {
  keyword?: string
  numberOfReviews?: number
  ratingAverage?: number
  /** Rating distribution array for this record */
  ratingDistribution?: RatingDistribution[]
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Percentage of this word in all reviews */
  usageRatio?: number
}

export interface ReviewLabelReport {
  data?: ReviewLabelReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewLabelReportData {
  description?: string
  noRecordsText?: string
  records?: LabelListReportRecord[]
  title?: string
}

export interface ReviewLanguageReport {
  data?: ReviewLanguageReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewLanguageReportData {
  description?: string
  noRecordsText?: string
  records?: ReviewLanguageReportRecord[]
  title?: string
}

export interface ReviewLanguageReportRecord {
  language?: Language
  numberOfReviews?: number
  ratingAverage?: number
  /** Rating distribution array for this record */
  ratingDistribution?: RatingDistribution[]
}

export interface ReviewListData {
  description?: string
  noRecordsText?: string
  records?: Review[]
  title?: string
}

export interface ReviewListReport {
  data?: ReviewListData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewReplySuggestion {
  suggestion?: string
}

export interface ReviewReplyTemplate {
  /** ID of template */
  id: string
  /**
   * Language code of this template
   * @example "en"
   */
  languageCode: string
  /** Main reply text of template to be used for replying reviews */
  replyText: string
  /** Title of template */
  title: string
}

export interface ReviewReplyTemplateRequest {
  /**
   * Language of reply text
   * @example "en"
   */
  languageCode?: string
  /**
   * Main templated text to be used while replying reviews
   * @minLength 2
   * @maxLength 500
   * @example "Thanks for your feedback."
   */
  replyText: string
  /**
   * Title of template
   * @minLength 2
   * @maxLength 25
   * @example "Thanks"
   */
  title: string
}

export interface ReviewResponse {
  /** Body of response */
  body?: string
  /** ID of response (Apple) */
  id?: string
  /** Date of response */
  lastModifiedDate?: string
  /** Reply respondent of the review (android only) */
  respondent?: string
  /** State of response (PUBLISHED, PENDING_PUBLISH) */
  state?: string
}

export interface ReviewSentimentReport {
  data?: ReviewSentimentReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewSentimentReportData {
  description?: string
  noRecordsText?: string
  records?: SentimentListReportRecord[]
  title?: string
}

export interface ReviewTagReport {
  data?: ReviewTagReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewTagReportData {
  description?: string
  noRecordsText?: string
  records?: TagListReportRecord[]
  title?: string
}

export interface ReviewTimelineReport {
  data?: GithubComTypediveApiCmdApiHandlersReviewReportsReviewTimelineReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewTimelineReportRecord {
  /** Date of record */
  date: string
  /** Number of reviews with rating 1 */
  numberOfRatings1: number
  /** Number of reviews with rating 2 */
  numberOfRatings2: number
  /** Number of reviews with rating 3 */
  numberOfRatings3: number
  /** Number of reviews with rating 4 */
  numberOfRatings4: number
  /** Number of reviews with rating 5 */
  numberOfRatings5: number
}

export interface ReviewsSummaryReport {
  data?: GithubComTypediveApiCmdApiHandlersReviewReportsReviewTimelineReportData
  infoBox?: ProjectStateExplanation
  tools: Tools
}

export interface ReviewsSummaryReportRecord {
  colorCode?: string
  numberOfReviews?: number
  title?: string
}

export interface Segment {
  /** ID of segment */
  id?: string
  /** Name of segment */
  title?: string
}

export interface SentimentAnalysis {
  languageCode?: string
  languageSupported?: boolean
  magnitude?: number
  score?: number
}

export interface SentimentListReportRecord {
  /** Alt text of annotation */
  altText?: string
  /** Bootstrap icon name if there is an icon */
  iconName?: string
  /** Url of the icon if available */
  iconUrl?: string
  id: string
  numberOfReviews: number
  percentage: number
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Title of annotation */
  title: string
  /** Type of annotation */
  type: 'stamp' | 'label' | 'sentiment' | 'tag'
}

export interface SlackIntegrationRequest {
  /** Authentication code received from Slack */
  authenticationCode: string
  /** Redirect URL used during Slack authentication */
  redirectUrl: string
}

export interface Tag {
  color?: string
  description?: string
  icon?: string
  /**
   * @minLength 2
   * @maxLength 10
   * @example "bug-report"
   */
  id: string
  /**
   * @minLength 2
   * @maxLength 10
   * @example "Bug Report"
   */
  title: string
}

export interface TagListReportRecord {
  /** Alt text of annotation */
  altText?: string
  /** Bootstrap icon name if there is an icon */
  iconName?: string
  /** Url of the icon if available */
  iconUrl?: string
  id?: string
  numberOfReviews?: number
  ratingAverage?: number
  /** Rating distribution array for this record */
  ratingDistribution?: RatingDistribution[]
  /** Theme of annotation */
  theme: 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** Title of annotation */
  title: string
  /** Type of annotation */
  type: 'stamp' | 'label' | 'sentiment' | 'tag'
}

export interface TagRequest {
  /** Color of this tag */
  color?: string
  /**
   * Description of tag
   * @maxLength 100
   */
  description?: string
  /** Icon if this tag */
  icon?: string
  /**
   * Tag to create
   * @minLength 2
   * @maxLength 25
   * @example "Bug"
   */
  title: string
}

export interface Task {
  /** Is it required to show a confirmation popup if user wants to close this task */
  confirmation?: TaskConfirmation
  /** Description of task */
  description: string
  /** If task will have a link to another console page or not */
  hasLink: boolean
  /**
   * Id:
   * * organization_name - update organization name
   * * apple_integration - integrate to apple services
   * * google_integration - integrate to google services
   * * invite_users - invite users
   * * my_ios_app - add your iOS app
   * * my_android_app - add your android app
   * * my_macos_app - add your macOS app
   * * add_competitors - follow competitors
   */
  id: string
  /** Organization ID */
  organizationId: string
  /** Project ID of task. The field is empty if task is not belong to a project */
  projectId: string
  /** Severity of task to be used for formatting */
  severity: 'optional' | 'warning' | 'critical'
  /**
   * TaskLink:
   * * organizationSettings - Overview tab of organization settings
   * * organizationSettings_Integrations_Apple - Integrations tab of organization settings
   * * organizationSettings_Integrations_Google - Integrations tab of organization settings
   * * organizationSettings_Users - Users tab of organization settings
   * * projectSettingsMyApps_ios - My apps tab of project settings
   * * projectSettingsMyApps_android - My apps tab of project settings
   * * projectSettingsMyApps_macos - My apps tab of project settings
   * * projectSettingsCompetitors - SegmentCompetitors tab of project settings
   */
  taskLink: string
  /** Title of task */
  title: string
}

export interface TaskConfirmation {
  /** Description for confirmation */
  description: string
  /** Title for confirmation */
  title: string
}

export interface TaskList {
  description: string
  /** Tasks of task list */
  tasks: Task[]
  /** Title of task list */
  title: string
}

export interface TextFilter {
  isVisible?: boolean
  placeholderText: string
  searchedText: string
}

export interface Tools {
  availableSegments: Segment[]
  filter?: ReviewFilter
  segment: string
}

export interface UpdateUserRequest {
  /**
   * Name of user
   * @minLength 2
   * @maxLength 25
   */
  name: string
}

export interface User {
  /** Can user be an editor */
  canBeEditor: boolean
  /** Can user be an owner */
  canBeOwner: boolean
  /** Can user be a viewer */
  canBeViewer: boolean
  /** Can user leave the organization */
  canUserLeave: boolean
  /** Display name of user */
  displayName?: string
  /** Email address of user Format(email) */
  email: string
  /** Needs an action menu for this user or not */
  hasActions: boolean
  /** Internal id of user */
  id: string
  /** Is user deletable or not */
  isDeletable: boolean
  /** Is it allowed to send an invitation to this user or not */
  isInvitable: boolean
  /** Status of user */
  status: 'viewer' | 'editor' | 'owner' | 'invited'
}

export interface UserUpdateRequest {
  /** ID of user */
  id: string
  /**
   * Level:
   * * owner - Owner of organization
   * * editor - Editor in this organization
   * * viewer - Viewer of organization
   */
  level: 'owner' | 'editor' | 'viewer'
}

export interface UserUpdateResponse {
  name?: string
}

export interface GithubComTypediveApiCmdApiHandlersReviewReportsReviewTimelineReportData {
  noRecordsText?: string
  records?: ReviewsSummaryReportRecord[]
}

export interface ModelsStringFilter {
  isVisible?: boolean
  value?: string
}

export interface MultipartFileHeader {
  filename?: string
  header?: TextprotoMIMEHeader
  size?: number
}

export interface ReplyTemplatesReplyTemplate {
  /** ID of template */
  id: string
  /**
   * Language code of this template
   * @example "en"
   */
  languageCode: string
  /**
   * Name of language
   * @example "English'"
   */
  languageName: string
  /** Main reply text of template to be used for replying reviews */
  replyText: string
  /** Title of template */
  title: string
}

export type TextprotoMIMEHeader = Record<string, string[]>

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://qa.api.typedive.com/v1'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Typedive QA API
 * @baseUrl https://qa.api.typedive.com/v1
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description Returns list of blog posts
     *
     * @tags Admin
     * @name BlogList
     * @summary Get Blog Posts
     * @request GET:/admin/blog
     * @secure
     */
    blogList: (params: RequestParams = {}) =>
      this.request<BlogPost[], Error>({
        path: `/admin/blog`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates or updates a new blog post and returns details of the created post. This method can update a blog post if you post id field in the posted data.
     *
     * @tags Admin
     * @name BlogCreate
     * @summary Create or Update a Blog Post
     * @request POST:/admin/blog
     * @secure
     */
    blogCreate: (request: BlogPostRequest, params: RequestParams = {}) =>
      this.request<BlogPost, Error>({
        path: `/admin/blog`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of blog categories
     *
     * @tags Admin
     * @name BlogCategoryList
     * @summary Get Blog Categories
     * @request GET:/admin/blog/category
     * @secure
     */
    blogCategoryList: (params: RequestParams = {}) =>
      this.request<BlogCategory[], Error>({
        path: `/admin/blog/category`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of blog tags
     *
     * @tags Admin
     * @name BlogTagList
     * @summary Get Blog Tags
     * @request GET:/admin/blog/tag
     * @secure
     */
    blogTagList: (params: RequestParams = {}) =>
      this.request<BlogTag[], Error>({
        path: `/admin/blog/tag`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns details about a given blog post
     *
     * @tags Admin
     * @name BlogDetail
     * @summary Get Blog Post Detail
     * @request GET:/admin/blog/{blogPostId}
     * @secure
     */
    blogDetail: (blogPostId: string, params: RequestParams = {}) =>
      this.request<BlogPost, Error>({
        path: `/admin/blog/${blogPostId}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes a blog post and returns updated blog posts lists
     *
     * @tags Admin
     * @name BlogDelete
     * @summary Delete Blog Post
     * @request DELETE:/admin/blog/{blogPostId}
     * @secure
     */
    blogDelete: (blogPostId: string, params: RequestParams = {}) =>
      this.request<BlogPost[], Error>({
        path: `/admin/blog/${blogPostId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns campaign URL options for multiple platforms
     *
     * @tags Admin
     * @name CampaignCreate
     * @summary Creates campaign URL
     * @request POST:/admin/campaign
     * @secure
     */
    campaignCreate: (request: CampaignURLRequest, params: RequestParams = {}) =>
      this.request<CampaignUrl[], Error>({
        path: `/admin/campaign`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  country = {
    /**
     * @description Lists all countries for Apple and Google
     *
     * @tags Lookup
     * @name CountryList
     * @summary Get Countries
     * @request GET:/country
     * @secure
     */
    countryList: (params: RequestParams = {}) =>
      this.request<CountryLists, Error>({
        path: `/country`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  language = {
    /**
     * @description Lists all languages for Apple and Google
     *
     * @tags Lookup
     * @name LanguageList
     * @summary Get Languages
     * @request GET:/language
     * @secure
     */
    languageList: (params: RequestParams = {}) =>
      this.request<LanguageLists, Error>({
        path: `/language`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  login = {
    /**
     * @description Logs in to Apptargets to an existing account or creates a new one
     *
     * @tags User
     * @name LoginCreate
     * @summary Login a user to Apptargets
     * @request POST:/login
     * @secure
     */
    loginCreate: (request: LoginRequest, params: RequestParams = {}) =>
      this.request<Login, Error>({
        path: `/login`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  logout = {
    /**
     * @description Logs out given user from Apptargets
     *
     * @tags User
     * @name LogoutCreate
     * @summary Logout a user from Apptargets
     * @request POST:/logout
     * @secure
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<string, Error>({
        path: `/logout`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  organization = {
    /**
     * @description Returns list of organizations for current user
     *
     * @tags Organization
     * @name OrganizationList
     * @summary Get list of organizations
     * @request GET:/organization
     * @secure
     */
    organizationList: (params: RequestParams = {}) =>
      this.request<OrganizationListItem[], Error>({
        path: `/organization`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns newly created organization
     *
     * @tags Organization Settings
     * @name OrganizationCreate
     * @summary Creates a new organization
     * @request POST:/organization
     * @secure
     */
    organizationCreate: (request: OrganizationRequest, params: RequestParams = {}) =>
      this.request<Organization, Error>({
        path: `/organization`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns details of given organization
     *
     * @tags Organization
     * @name OrganizationDetail
     * @summary Get details of an organization
     * @request GET:/organization/{organizationId}
     * @secure
     */
    organizationDetail: (organizationId: string, params: RequestParams = {}) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns details about updated organization
     *
     * @tags Organization Settings
     * @name OrganizationUpdate
     * @summary Updates an existing organization
     * @request PUT:/organization/{organizationId}
     * @secure
     */
    organizationUpdate: (
      organizationId: string,
      request: OrganizationRequest,
      params: RequestParams = {},
    ) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an organization and returns DeleteOrganizationResult as a result
     *
     * @tags Organization Settings
     * @name OrganizationDelete
     * @summary Delete Organization
     * @request DELETE:/organization/{organizationId}
     * @secure
     */
    organizationDelete: (organizationId: string, params: RequestParams = {}) =>
      this.request<DeleteOrganizationResult, Error>({
        path: `/organization/${organizationId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds Apple integration to an organization and returns updated organization details
     *
     * @tags Organization Settings
     * @name IntegrationsAppleCreate
     * @summary Save Apple Integration
     * @request POST:/organization/{organizationId}/integrations/apple
     * @secure
     */
    integrationsAppleCreate: (
      organizationId: string,
      request: AppleIntegrationRequest,
      params: RequestParams = {},
    ) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}/integrations/apple`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes Apple integration from an organization and returns updated organization detail
     *
     * @tags Organization Settings
     * @name IntegrationsAppleDelete
     * @summary Delete Apple Integration
     * @request DELETE:/organization/{organizationId}/integrations/apple
     * @secure
     */
    integrationsAppleDelete: (organizationId: string, params: RequestParams = {}) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}/integrations/apple`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds Google integration to an organization and returns updated organization detail
     *
     * @tags Organization Settings
     * @name IntegrationsGoogleCreate
     * @summary Save Google Integration
     * @request POST:/organization/{organizationId}/integrations/google
     * @secure
     */
    integrationsGoogleCreate: (
      organizationId: string,
      request: GoogleIntegrationRequest,
      params: RequestParams = {},
    ) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}/integrations/google`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes Google integration from an organization and returns updated organization detail
     *
     * @tags Organization Settings
     * @name IntegrationsGoogleDelete
     * @summary Delete Google Integration
     * @request DELETE:/organization/{organizationId}/integrations/google
     * @secure
     */
    integrationsGoogleDelete: (organizationId: string, params: RequestParams = {}) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}/integrations/google`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new project under an organization and returns updated details of organization
     *
     * @tags Project Settings
     * @name ProjectCreate
     * @summary Create Project
     * @request POST:/organization/{organizationId}/project
     * @secure
     */
    projectCreate: (organizationId: string, request: ProjectRequest, params: RequestParams = {}) =>
      this.request<Project, Error>({
        path: `/organization/${organizationId}/project`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Provides details for a project
     *
     * @tags Project
     * @name ProjectDetail
     * @summary Get Project Details
     * @request GET:/organization/{organizationId}/project/{projectId}
     * @secure
     */
    projectDetail: (organizationId: string, projectId: string, params: RequestParams = {}) =>
      this.request<Project, Error>({
        path: `/organization/${organizationId}/project/${projectId}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates a project and returns updated project
     *
     * @tags Project Settings
     * @name ProjectUpdate
     * @summary Update Project
     * @request PUT:/organization/{organizationId}/project/{projectId}
     * @secure
     */
    projectUpdate: (
      organizationId: string,
      projectId: string,
      request: ProjectRequest,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/organization/${organizationId}/project/${projectId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes a project and returns organization details
     *
     * @tags Project Settings
     * @name ProjectDelete
     * @summary Delete Project
     * @request DELETE:/organization/{organizationId}/project/{projectId}
     * @secure
     */
    projectDelete: (organizationId: string, projectId: string, params: RequestParams = {}) =>
      this.request<Organization, Error>({
        path: `/organization/${organizationId}/project/${projectId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of alerts of given project
     *
     * @tags Alerts
     * @name ProjectAlertDetail
     * @summary Get Alerts
     * @request GET:/organization/{organizationId}/project/{projectId}/alert
     * @secure
     */
    projectAlertDetail: (organizationId: string, projectId: string, params: RequestParams = {}) =>
      this.request<Alert[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/alert`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new alert on project level and returns list of alerts
     *
     * @tags Alerts
     * @name ProjectAlertCreate
     * @summary Create Alert
     * @request POST:/organization/{organizationId}/project/{projectId}/alert
     * @secure
     */
    projectAlertCreate: (
      organizationId: string,
      projectId: string,
      request: Alert,
      params: RequestParams = {},
    ) =>
      this.request<Alert[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/alert`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing alert on project level and returns list of alerts
     *
     * @tags Alerts
     * @name ProjectAlertUpdate
     * @summary Update Alert
     * @request PUT:/organization/{organizationId}/project/{projectId}/alert/{alertId}
     * @secure
     */
    projectAlertUpdate: (
      organizationId: string,
      projectId: string,
      alertId: string,
      request: Alert,
      params: RequestParams = {},
    ) =>
      this.request<Alert[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/alert/${alertId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an alert on project level and returns list of alerts
     *
     * @tags Alerts
     * @name ProjectAlertDelete
     * @summary Delete Alert
     * @request DELETE:/organization/{organizationId}/project/{projectId}/alert/{alertId}
     * @secure
     */
    projectAlertDelete: (
      organizationId: string,
      projectId: string,
      alertId: string,
      params: RequestParams = {},
    ) =>
      this.request<Alert[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/alert/${alertId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds a new app to a project and returns updated project details
     *
     * @tags Project Settings
     * @name ProjectAppCreate
     * @summary Adds an app to project as our or as a competitor
     * @request POST:/organization/{organizationId}/project/{projectId}/app
     * @secure
     */
    projectAppCreate: (
      organizationId: string,
      projectId: string,
      request: AddAppRequest,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/organization/${organizationId}/project/${projectId}/app`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an app from project and returns updated project details. It works for both of our apps and competitors
     *
     * @tags Project Settings
     * @name ProjectAppDelete
     * @summary Deletes an app from project
     * @request DELETE:/organization/{organizationId}/project/{projectId}/app/{appId}
     * @secure
     */
    projectAppDelete: (
      organizationId: string,
      projectId: string,
      appId: string,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/organization/${organizationId}/project/${projectId}/app/${appId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of integrations of given project
     *
     * @tags Project Settings
     * @name ProjectIntegrationDetail
     * @summary Get Integrations
     * @request GET:/organization/{organizationId}/project/{projectId}/integration
     * @secure
     */
    projectIntegrationDetail: (
      organizationId: string,
      projectId: string,
      params: RequestParams = {},
    ) =>
      this.request<Integration[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/integration`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds a slack integration to the given project and returns updated list of integrations
     *
     * @tags Project Settings
     * @name ProjectIntegrationSlackCreate
     * @summary Add Slack Integration
     * @request POST:/organization/{organizationId}/project/{projectId}/integration/slack
     * @secure
     */
    projectIntegrationSlackCreate: (
      organizationId: string,
      projectId: string,
      request: SlackIntegrationRequest,
      params: RequestParams = {},
    ) =>
      this.request<Integration[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/integration/slack`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of labels for given organization and project with multiple filtering options
     *
     * @tags Labels
     * @name ProjectLabelListDetail
     * @summary Get labels list
     * @request GET:/organization/{organizationId}/project/{projectId}/label/list
     * @secure
     */
    projectLabelListDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewLabelReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/label/list`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns ratings country report
     *
     * @tags Ratings
     * @name ProjectRatingCountryDetail
     * @summary Rating Country Report
     * @request GET:/organization/{organizationId}/project/{projectId}/rating/country
     * @secure
     */
    projectRatingCountryDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<RatingReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/rating/country`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of review reply templates of given project
     *
     * @tags Project Settings
     * @name ProjectReplyTemplateDetail
     * @summary Get Review Reply Templates
     * @request GET:/organization/{organizationId}/project/{projectId}/replyTemplate
     * @secure
     */
    projectReplyTemplateDetail: (
      organizationId: string,
      projectId: string,
      params: RequestParams = {},
    ) =>
      this.request<ReplyTemplatesReplyTemplate[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/replyTemplate`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new review reply template on project level and returns updated list of templates
     *
     * @tags Project Settings
     * @name ProjectReplyTemplateCreate
     * @summary Create Review Reply Template
     * @request POST:/organization/{organizationId}/project/{projectId}/replyTemplate
     * @secure
     */
    projectReplyTemplateCreate: (
      organizationId: string,
      projectId: string,
      request: ReviewReplyTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<ReviewReplyTemplate[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/replyTemplate`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing review reply template on project level and returns updated list of templates
     *
     * @tags Project Settings
     * @name ProjectReplyTemplateUpdate
     * @summary Update Review Reply Template
     * @request PUT:/organization/{organizationId}/project/{projectId}/replyTemplate/{templateId}
     * @secure
     */
    projectReplyTemplateUpdate: (
      organizationId: string,
      projectId: string,
      templateId: string,
      request: ReviewReplyTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<ReviewReplyTemplate[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/replyTemplate/${templateId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an existing review reply template on project level and returns updated list of templates
     *
     * @tags Project Settings
     * @name ProjectReplyTemplateDelete
     * @summary Delete Review Reply Template
     * @request DELETE:/organization/{organizationId}/project/{projectId}/replyTemplate/{templateId}
     * @secure
     */
    projectReplyTemplateDelete: (
      organizationId: string,
      projectId: string,
      templateId: string,
      params: RequestParams = {},
    ) =>
      this.request<ReviewReplyTemplate[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/replyTemplate/${templateId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns review country report for project.
     *
     * @tags Reviews
     * @name ProjectReviewCountryDetail
     * @summary Get Country Report
     * @request GET:/organization/{organizationId}/project/{projectId}/review/country
     * @secure
     */
    projectReviewCountryDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewCountryReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/country`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns review keyword report for project.
     *
     * @tags Reviews
     * @name ProjectReviewKeywordDetail
     * @summary Get Reviews Keyword Report
     * @request GET:/organization/{organizationId}/project/{projectId}/review/keyword
     * @secure
     */
    projectReviewKeywordDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewKeywordReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/keyword`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns review language report for project.
     *
     * @tags Reviews
     * @name ProjectReviewLanguageDetail
     * @summary Get Language Report
     * @request GET:/organization/{organizationId}/project/{projectId}/review/language
     * @secure
     */
    projectReviewLanguageDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewLanguageReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/language`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of reviews for given organization and project with multiple filtering options
     *
     * @tags Reviews
     * @name ProjectReviewListDetail
     * @summary Get reviews
     * @request GET:/organization/{organizationId}/project/{projectId}/review/list
     * @secure
     */
    projectReviewListDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** Comma separated ids of apps if reviews are requested for a specific apps */
        appIds?: string
        /** Comma separated rating values for apps like 1,3,5 */
        ratings?: 'all' | '1' | '2' | '3' | '4' | '5'
        /** Comma separated country codes to filter reviews for a specific countries */
        countryCodes?: string
        /** Comma separated Language codes to filter reviews for a specific languages */
        languageCodes?: string
        /** Comma separated Keywords to filter reviews including the given keyword. It means if the searched keyword contains any commas, they will be searched as different search terms. */
        keywords?: string
        /** Comma separated ids of reviews to receive only those reviews. This parameter overrides all the other filter settings */
        reviewIds?: string
        /** Comma separated list of tag ids to be used for filtering */
        tagIds?: string
        /** Comma separated list of label ids to be used for filtering */
        labelIds?: string
        /** Comma separated list of sentiment ids to be used for filtering */
        sentimentIds?: string
        /** Can be set to true to receive only unanswered reviews */
        unanswered?: string
        /** Limit for maximum number of results */
        limit?: string
        /** After */
        after?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewListReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/list`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns reviews summary report
     *
     * @tags Reviews
     * @name ProjectReviewSummaryDetail
     * @summary Get Reviews Summary
     * @request GET:/organization/{organizationId}/project/{projectId}/review/summary
     * @secure
     */
    projectReviewSummaryDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewsSummaryReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/summary`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns review timeline report for project.
     *
     * @tags Reviews
     * @name ProjectReviewTimelineDetail
     * @summary Get Review Timeline
     * @request GET:/organization/{organizationId}/project/{projectId}/review/timeline
     * @secure
     */
    projectReviewTimelineDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewTimelineReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/timeline`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Favorite or un-favorite a review
     *
     * @tags Reviews
     * @name ProjectReviewFavoriteCreate
     * @summary Favorite or un-favorite a review
     * @request POST:/organization/{organizationId}/project/{projectId}/review/{reviewId}/favorite
     * @secure
     */
    projectReviewFavoriteCreate: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      request: ReviewFavoriteRequest,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/favorite`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates a reply to a review by using organization's store integration and returns updated review object
     *
     * @tags Reviews
     * @name ProjectReviewReplyUpdate
     * @summary Update Review Reply
     * @request PUT:/organization/{organizationId}/project/{projectId}/review/{reviewId}/reply
     * @secure
     */
    projectReviewReplyUpdate: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      request: ReplyReviewRequest,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/reply`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Replies a review by using organization's store integration and returns updated review object
     *
     * @tags Reviews
     * @name ProjectReviewReplyCreate
     * @summary Reply Review
     * @request POST:/organization/{organizationId}/project/{projectId}/review/{reviewId}/reply
     * @secure
     */
    projectReviewReplyCreate: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      request: ReplyReviewRequest,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/reply`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes a reply already sent to a review
     *
     * @tags Reviews
     * @name ProjectReviewReplyDelete
     * @summary Delete Review Reply
     * @request DELETE:/organization/{organizationId}/project/{projectId}/review/{reviewId}/reply
     * @secure
     */
    projectReviewReplyDelete: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/reply`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Suggests an AI supported reply for the given review
     *
     * @tags Reviews
     * @name ProjectReviewReplySuggestDetail
     * @summary Suggest Review Reply
     * @request GET:/organization/{organizationId}/project/{projectId}/review/{reviewId}/reply/suggest
     * @secure
     */
    projectReviewReplySuggestDetail: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      params: RequestParams = {},
    ) =>
      this.request<ReviewReplySuggestion, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/reply/suggest`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of tags available to add into a review
     *
     * @tags Reviews
     * @name ProjectReviewTagDetail
     * @summary Get Available Tags
     * @request GET:/organization/{organizationId}/project/{projectId}/review/{reviewId}/tag
     * @secure
     */
    projectReviewTagDetail: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, Tag>[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/tag`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds a tag to a review and returns updated review
     *
     * @tags Reviews
     * @name ProjectReviewTagCreate
     * @summary Add Tag
     * @request POST:/organization/{organizationId}/project/{projectId}/review/{reviewId}/tag
     * @secure
     */
    projectReviewTagCreate: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      request: AddTagRequest,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/tag`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Removes a tag from a review and returns updated review record
     *
     * @tags Reviews
     * @name ProjectReviewTagDelete
     * @summary Remove Tag
     * @request DELETE:/organization/{organizationId}/project/{projectId}/review/{reviewId}/tag/{tagId}
     * @secure
     */
    projectReviewTagDelete: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      tagId: string,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/tag/${tagId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Translates description field of a review and returns updated review record
     *
     * @tags Reviews
     * @name ProjectReviewTranslateDetail
     * @summary Translate a review
     * @request GET:/organization/{organizationId}/project/{projectId}/review/{reviewId}/translate
     * @secure
     */
    projectReviewTranslateDetail: (
      organizationId: string,
      projectId: string,
      reviewId: string,
      params: RequestParams = {},
    ) =>
      this.request<Review, Error>({
        path: `/organization/${organizationId}/project/${projectId}/review/${reviewId}/translate`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of sentiments for given organization and project with filtering options
     *
     * @tags Sentiments
     * @name ProjectSentimentListDetail
     * @summary Get Sentiment List
     * @request GET:/organization/{organizationId}/project/{projectId}/sentiment/list
     * @secure
     */
    projectSentimentListDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
        /** Comma separated list of sentiment ids to be used for filtering */
        sentimentIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewSentimentReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/sentiment/list`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of tags of given project in alphabetical order
     *
     * @tags Project Settings
     * @name ProjectTagDetail
     * @summary Get Tags
     * @request GET:/organization/{organizationId}/project/{projectId}/tag
     * @secure
     */
    projectTagDetail: (organizationId: string, projectId: string, params: RequestParams = {}) =>
      this.request<Tag[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/tag`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new tag on project level and returns list of tags of given project in alphabetical order
     *
     * @tags Project Settings
     * @name ProjectTagCreate
     * @summary Create Tag
     * @request POST:/organization/{organizationId}/project/{projectId}/tag
     * @secure
     */
    projectTagCreate: (
      organizationId: string,
      projectId: string,
      request: TagRequest,
      params: RequestParams = {},
    ) =>
      this.request<Tag[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/tag`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of tags for given organization and project with filtering options
     *
     * @tags Tags
     * @name ProjectTagListDetail
     * @summary Get Tag List
     * @request GET:/organization/{organizationId}/project/{projectId}/tag/list
     * @secure
     */
    projectTagListDetail: (
      organizationId: string,
      projectId: string,
      query: {
        /**
         * Segmentation of data
         * @default "my-apps"
         */
        segment: 'my-apps' | 'competitors'
        /** App IDs */
        appIds?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<ReviewTagReport, Error>({
        path: `/organization/${organizationId}/project/${projectId}/tag/list`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing tag on project level and returns list of tags of given project in alphabetical order
     *
     * @tags Project Settings
     * @name ProjectTagUpdate
     * @summary Update Tag
     * @request PUT:/organization/{organizationId}/project/{projectId}/tag/{tagId}
     * @secure
     */
    projectTagUpdate: (
      organizationId: string,
      projectId: string,
      tagId: string,
      request: TagRequest,
      params: RequestParams = {},
    ) =>
      this.request<Tag[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/tag/${tagId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes a tag on project level and returns list of tags of given project in alphabetical order
     *
     * @tags Project Settings
     * @name ProjectTagDelete
     * @summary Delete Tag
     * @request DELETE:/organization/{organizationId}/project/{projectId}/tag/{tagId}
     * @secure
     */
    projectTagDelete: (
      organizationId: string,
      projectId: string,
      tagId: string,
      params: RequestParams = {},
    ) =>
      this.request<Tag[], Error>({
        path: `/organization/${organizationId}/project/${projectId}/tag/${tagId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Closes a task of an organization or project and returns new task list of organization or project
     *
     * @tags Tasks
     * @name TaskCreate
     * @summary Close Task
     * @request POST:/organization/{organizationId}/task
     * @secure
     */
    taskCreate: (organizationId: string, request: CloseTaskRequest, params: RequestParams = {}) =>
      this.request<TaskList, Error>({
        path: `/organization/${organizationId}/task`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of users in an organization
     *
     * @tags Organization Settings
     * @name UserDetail
     * @summary Get Users
     * @request GET:/organization/{organizationId}/user
     * @secure
     */
    userDetail: (organizationId: string, params: RequestParams = {}) =>
      this.request<User[], Error>({
        path: `/organization/${organizationId}/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Adds a new user and returns new user list
     *
     * @tags Organization Settings
     * @name UserCreate
     * @summary Add User
     * @request POST:/organization/{organizationId}/user
     * @secure
     */
    userCreate: (organizationId: string, request: AddUserRequest, params: RequestParams = {}) =>
      this.request<User[], Error>({
        path: `/organization/${organizationId}/user`,
        method: 'POST',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates an existing user and returns new user list
     *
     * @tags Organization Settings
     * @name UserUpdate
     * @summary Update User
     * @request PUT:/organization/{organizationId}/user/{userId}
     * @secure
     */
    userUpdate: (
      organizationId: string,
      userId: string,
      request: UserUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<User[], Error>({
        path: `/organization/${organizationId}/user/${userId}`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an existing user and returns new user list
     *
     * @tags Organization Settings
     * @name UserDelete
     * @summary Delete User
     * @request DELETE:/organization/{organizationId}/user/{userId}
     * @secure
     */
    userDelete: (organizationId: string, userId: string, params: RequestParams = {}) =>
      this.request<User[], Error>({
        path: `/organization/${organizationId}/user/${userId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Resending an invitation to a user
     *
     * @tags Organization Settings
     * @name UserInviteCreate
     * @summary Re invite a user
     * @request POST:/organization/{organizationId}/user/{userId}/invite
     * @secure
     */
    userInviteCreate: (organizationId: string, userId: string, params: RequestParams = {}) =>
      this.request<User[], Error>({
        path: `/organization/${organizationId}/user/${userId}/invite`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  searchApp = {
    /**
     * @description Searches apps on apple and google app stores
     *
     * @tags App
     * @name SearchAppList
     * @summary Search App
     * @request GET:/searchApp
     * @secure
     */
    searchAppList: (
      query: {
        /**
         * term to search
         * @maxLength 100
         */
        term: string
        /**
         * platform
         * @default "ios"
         */
        platform?: 'ios' | 'android' | 'macos'
        /**
         * country code (id)
         * @minLength 2
         * @maxLength 2
         * @default "us"
         */
        cc?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<AppSearchResult[], Error>({
        path: `/searchApp`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  user = {
    /**
     * @description Updates currently logged-in user and returns UserUpdateResponse model
     *
     * @tags User
     * @name UserUpdate
     * @summary Update User
     * @request PUT:/user
     * @secure
     */
    userUpdate: (request: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<UserUpdateResponse, Error>({
        path: `/user`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns list of invitations sent to current user
     *
     * @tags User
     * @name InvitationList
     * @summary Get Invitations
     * @request GET:/user/invitation
     * @secure
     */
    invitationList: (params: RequestParams = {}) =>
      this.request<Invitation[], Error>({
        path: `/user/invitation`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets invitation decision and returns new organizations list
     *
     * @tags User
     * @name InvitationUpdate
     * @summary Accept or reject an organization invitation
     * @request PUT:/user/invitation
     * @secure
     */
    invitationUpdate: (
      organizationId: string,
      request: InvitationDecision,
      params: RequestParams = {},
    ) =>
      this.request<OrganizationListItem[], Error>({
        path: `/user/invitation`,
        method: 'PUT',
        body: request,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
