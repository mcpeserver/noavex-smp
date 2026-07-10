export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export interface ServerConfig {
  serverName: string;
  tagline: string;
  heroSubtitle: string;
  socials: {
    discord: string;
    website: string;
  };
  ips: {
    java: {
      ip: string;
      port: string;
    };
    bedrock: {
      ip: string;
      port: string;
    };
  };
  worlds: Array<{
    id: string;
    badge: string;
    title: string;
    sub: string;
    description: string;
    type: string;
    bullets: string[];
  }>;
  quickInfo: Array<{
    type: string;
    title: string;
    description: string;
  }>;
  features: Array<{
    name: string;
    type: string;
  }>;
  commands: Array<{
    cmd: string;
    desc: string;
  }>;
  rules: Array<{
    num: string;
    title: string;
    desc: string;
  }>;
  warningText: string;
}
