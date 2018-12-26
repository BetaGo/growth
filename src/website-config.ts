export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  weibo?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: '忘川',
  description: '把生活过成诗',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/wantong-logo.png',
  lang: 'zh-cn',
  siteUrl: 'https://life.gouwantong.com',
  facebook: 'https://www.facebook.com/gouwantong',
  twitter: 'https://twitter.com/IronManGWT',
  weibo: 'https://weibo.com/TrueIronMan',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
};

export default config;
