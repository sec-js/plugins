const THEMES = [
  "3den",
  "adben",
  "af-magic",
  "afowler",
  "agnoster",
  "alanpeabody",
  "amuse",
  "apple",
  "arrow",
  "aussiegeek",
  "avit",
  "awesomepanda",
  "bira",
  "blinks",
  "bureau",
  "candy-kingdom",
  "candy",
  "clean",
  "cloud",
  "crcandy",
  "crunch",
  "cypher",
  "dallas",
  "darkblood",
  "daveverwer",
  "dieter",
  "dogenpunk",
  "dpoggi",
  "dst",
  "dstufft",
  "duellj",
  "eastwood",
  "edvardm",
  "emotty",
  "essembeh",
  "evan",
  "fino-time",
  "fino",
  "fishy",
  "flazz",
  "fletcherm",
  "fox",
  "frisk",
  "frontcube",
  "funky",
  "fwalch",
  "gallifrey",
  "gallois",
  "garyblessington",
  "gentoo",
  "geoffgarside",
  "gianu",
  "gnzh",
  "gozilla",
  "half-life",
  "humza",
  "imajes",
  "intheloop",
  "itchy",
  "jaischeema",
  "jbergantine",
  "jispwoso",
  "jnrowe",
  "jonathan",
  "josh",
  "jreese",
  "jtriley",
  "juanghurtado",
  "junkfood",
  "kafeitu",
  "kardan",
  "kennethreitz",
  "kiwi",
  "kolo",
  "kphoen",
  "lambda",
  "linuxonly",
  "lukerandall",
  "macovsky",
  "maran",
  "mgutz",
  "mh",
  "michelebologna",
  "mikeh",
  "miloshadzic",
  "minimal",
  "mira",
  "mlh",
  "mortalscumbag",
  "mrtazz",
  "murilasso",
  "muse",
  "nanotech",
  "nebirhos",
  "nicoulaj",
  "norm",
  "obraun",
  "peepcode",
  "philips",
  "pmcgee",
  "pygmalion-virtualenv",
  "pygmalion",
  "random",
  "re5et",
  "refined",
  "rgm",
  "risto",
  "rixius",
  "rkj-repos",
  "rkj",
  "robbyrussell",
  "sammy",
  "simonoff",
  "simple",
  "skaro",
  "smt",
  "Soliah",
  "sonicradish",
  "sorin",
  "sporty_256",
  "steeef",
  "strug",
  "sunaku",
  "sunrise",
  "superjarin",
  "suvash",
  "takashiyoshida",
  "terminalparty",
  "theunraveler",
  "tjkirch",
  "tjkirch_mod",
  "tonotdo",
  "trapd00r",
  "wedisagree",
  "wezm+",
  "wezm",
  "wuffers",
  "xiong-chiamiov-plus",
  "xiong-chiamiov",
  "ys",
  "zhann",
];

const PLUGINS = [
  "1password",
  "adb",
  "ag",
  "alias-finder",
  "aliases",
  "ansible",
  "ant",
  "apache2-macports",
  "arcanist",
  "archlinux",
  "asdf",
  "autoenv",
  "autojump",
  "autopep8",
  "aws",
  "battery",
  "bazel",
  "bbedit",
  "bedtools",
  "bgnotify",
  "boot2docker",
  "bower",
  "branch",
  "brew",
  "bundler",
  "cabal",
  "cake",
  "cakephp3",
  "capistrano",
  "cargo",
  "cask",
  "catimg",
  "celery",
  "chruby",
  "chucknorris",
  "cloudfoundry",
  "codeclimate",
  "coffee",
  "colemak",
  "colored-man-pages",
  "colorize",
  "command-not-found",
  "common-aliases",
  "compleat",
  "composer",
  "copybuffer",
  "copydir",
  "copyfile",
  "copypath",
  "cp",
  "cpanm",
  "dash",
  "debian",
  "deno",
  "dircycle",
  "direnv",
  "dirhistory",
  "dirpersist",
  "dnf",
  "dnote",
  "docker",
  "docker-compose",
  "docker-machine",
  "doctl",
  "dotenv",
  "dotnet",
  "droplr",
  "drush",
  "eecms",
  "emacs",
  "ember-cli",
  "emoji",
  "emoji-clock",
  "emotty",
  "encode64",
  "extract",
  "fabric",
  "fancy-ctrl-z",
  "fasd",
  "fastfile",
  "fbterm",
  "fd",
  "fig",
  "firewalld",
  "flutter",
  "fnm",
  "forklift",
  "fossil",
  "frontend-search",
  "fzf",
  "gas",
  "gatsby",
  "gb",
  "gcloud",
  "geeknote",
  "gem",
  "genpass",
  "gh",
  "git",
  "git-auto-fetch",
  "git-escape-magic",
  "git-extras",
  "git-flow",
  "git-flow-avh",
  "git-hubflow",
  "git-lfs",
  "git-prompt",
  "gitfast",
  "github",
  "gitignore",
  "glassfish",
  "globalias",
  "gnu-utils",
  "golang",
  "gpg-agent",
  "gradle",
  "grails",
  "grc",
  "grunt",
  "gulp",
  "hanami",
  "helm",
  "heroku",
  "history",
  "history-substring-search",
  "hitchhiker",
  "hitokoto",
  "homestead",
  "httpie",
  "invoke",
  "ionic",
  "ipfs",
  "isodate",
  "istioctl",
  "iterm2",
  "jake-node",
  "jenv",
  "jfrog",
  "jhbuild",
  "jira",
  "jruby",
  "jsontools",
  "juju",
  "jump",
  "kate",
  "keychain",
  "kitchen",
  "kn",
  "knife",
  "knife_ssh",
  "kops",
  "kube-ps1",
  "kubectl",
  "kubectx",
  "lando",
  "laravel",
  "laravel4",
  "laravel5",
  "last-working-dir",
  "lein",
  "lighthouse",
  "lol",
  "lpass",
  "lxd",
  "macos",
  "macports",
  "magic-enter",
  "man",
  "marked2",
  "mercurial",
  "meteor",
  "microk8s",
  "minikube",
  "mix",
  "mix-fast",
  "mongocli",
  "mosh",
  "multipass",
  "mvn",
  "mysql-macports",
  "n98-magerun",
  "nanoc",
  "ng",
  "nmap",
  "node",
  "nomad",
  "npm",
  "npx",
  "nvm",
  "oc",
  "octozen",
  "operator-sdk",
  "osx",
  "otp",
  "pass",
  "paver",
  "pep8",
  "per-directory-history",
  "percol",
  "perl",
  "perms",
  "phing",
  "pip",
  "pipenv",
  "pj",
  "please",
  "pm2",
  "pod",
  "poetry",
  "postgres",
  "pow",
  "powder",
  "powify",
  "profiles",
  "pyenv",
  "pylint",
  "python",
  "rails",
  "rake",
  "rake-fast",
  "rand-quote",
  "rbenv",
  "rbfu",
  "rbw",
  "react-native",
  "rebar",
  "redis-cli",
  "repo",
  "ripgrep",
  "ros",
  "rsync",
  "ruby",
  "rust",
  "rustup",
  "rvm",
  "safe-paste",
  "salt",
  "samtools",
  "sbt",
  "scala",
  "scd",
  "screen",
  "scw",
  "sdk",
  "sfdx",
  "sfffe",
  "shell-proxy",
  "shrink-path",
  "singlechar",
  "spring",
  "sprunge",
  "ssh-agent",
  "stack",
  "sublime",
  "sublime-merge",
  "sudo",
  "supervisor",
  "suse",
  "svcat",
  "svn",
  "svn-fast-info",
  "swiftpm",
  "symfony",
  "symfony2",
  "systemadmin",
  "systemd",
  "taskwarrior",
  "term_tab",
  "terminitor",
  "terraform",
  "textastic",
  "textmate",
  "thefuck",
  "themes",
  "thor",
  "tig",
  "timer",
  "tmux",
  "tmux-cssh",
  "tmuxinator",
  "toolbox",
  "torrent",
  "transfer",
  "tugboat",
  "ubuntu",
  "ufw",
  "universalarchive",
  "urltools",
  "vagrant",
  "vagrant-prompt",
  "vault",
  "vi-mode",
  "vim-interaction",
  "virtualenv",
  "virtualenvwrapper",
  "volta",
  "vscode",
  "vundle",
  "wakeonlan",
  "wd",
  "web-search",
  "wp-cli",
  "xcode",
  "yarn",
  "yii",
  "yii2",
  "yum",
  "z",
  "zbell",
  "zeus",
  "zoxide",
  "zsh-interactive-cd",
  "zsh-navigation-tools",
];

type Mode = string;
const modes: Mode[] = ["prompt", "auto", "reminder", "disabled"];

const plugin: Fig.Plugin = {
  name: "ohmyzsh",
  displayName: "Oh My Zsh",
  type: "shell",
  description:
    "A community-driven framework for managing your zsh configuration",
  icon: "https://avatars.githubusercontent.com/u/22552083",
  site: "https://ohmyz.sh/",
  docs: "https://github.com/ohmyzsh/ohmyzsh/wiki",
  github: "ohmyzsh/ohmyzsh",
  twitter: "ohmyzsh",
  community: "https://discord.gg/ohmyzsh",
  screenshots: [
    "images/omz.png",
    "images/af-magic.jpeg",
    "images/daveverwer.jpeg",
    "images/eastwood.jpeg",
    "images/nebirhos.jpeg",
  ],
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    preScript: ({ ctx }) => `export ZSH="${ctx.plugin.installDirectory}"`,
    sourceFiles: ["oh-my-zsh.sh"],
  },
  configuration: [
    {
      displayName: "Plugins",
      description: "Oh My Zsh plugins to load",
      type: "environmentVariable",
      interface: "multiselect",
      default: [],
      options: async ({ env }) =>
        env
          ? env.listFolder(`${env.plugin.installDirectory}/plugins`)
          : PLUGINS,
      name: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "environmentVariable",
      interface: "select",
      default: "robbyrussell",
      options: async ({ env }) => {
        if (!env) {
          return THEMES;
        }
        const themes = await env.listFolder(
          `${env.plugin.installDirectory}/themes`
        );
        return themes.map((theme) => theme.replace(".zsh-theme", ""));
      },
      name: "ZSH_THEME",
    },
    {
      displayName: "Getting Updates",
      description:
        "By default, you will be prompted to check for updates every 2 weeks.",
      configuration: [
        {
          name: "mode",
          displayName: "Update mode",
          type: "script",
          description: "Choose which update mode Oh My Zsh uses",
          additionalDetails:
            "**disabled**: disables all automatic updates; **auto**: automatically updates Oh My Zsh when a new version is available, without asking for confirmation; **reminder**: only checks if there are updates available and shows a reminder to update Oh My Zsh. **prompt** (default): ask for confirmation before updating Oh My Zsh.",
          interface: "multiselect",
          default: ["prompt"],
          options: modes,
          compile: (value) => `zstyle ':omz:update' mode ${value}`,
        },
        {
          name: "frequency",
          displayName: "Update Frequency",
          type: "script",
          description:
            "Choose how frequently Oh My Zsh checks for updates. The value is in days. The default value is 13 days",
          interface: "text",
          default: 13,
          compile: (value) => `zstyle ':omz:update' frequency ${value}`,
          disabled: ({ config }) => config.mode !== "disabled",
        },
      ],
    },

    // Random theme
    {
      displayName: "Random Theme",
      description: "These settings only work if the `Random` theme is selected",
      configuration: [
        {
          displayName: "Random Theme Candidates",
          description: "Limit the themes that random can pick from",
          type: "environmentVariable",
          interface: "multiselect",
          default: ["robbyrussell"],
          disabled: ({ config }) => config.ZSH_THEME !== "random",
          options: async ({ env }) => {
            if (!env) {
              return THEMES;
            }
            const themes = await env.listFolder(
              `${env.plugin.installDirectory}/themes`
            );
            return themes.map((theme) => theme.replace(".zsh-theme", ""));
          },
          name: "ZSH_THEME_RANDOM_CANDIDATES",
        },
        {
          displayName: "Ignored Theme Candidates",
          description: "Themes random should ignore",
          type: "environmentVariable",
          interface: "multiselect",
          default: ["robbyrussell"],
          disabled: ({ config }) => config.ZSH_THEME !== "random",
          options: async ({ env }) => {
            if (!env) {
              return THEMES;
            }
            const themes = await env.listFolder(
              `${env.plugin.installDirectory}/themes`
            );
            return themes.map((theme) => theme.replace(".zsh-theme", ""));
          },
          name: "ZSH_THEME_RANDOM_IGNORED",
        },
        {
          displayName: "Random Quiet",
          description:
            "If true, the random theme will not show a startup message indicating which theme was chosen",
          additionalDetails:
            "You can always run `echo $RANDOM_THEME` to show the current theme name",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          disabled: ({ config }) => config.ZSH_THEME !== "random",
          name: "ZSH_THEME_RANDOM_IGNORED",
        },
      ],
    },

    // Completion settings
    {
      displayName: "Tab Completion Settings",
      description: "Settings for completions",
      configuration: [
        {
          displayName: "Case Sensitive",
          description: "Set to true to force case sensitive completion.",
          additionalDetails:
            "e.g. if there are two files beginning with file, one lowercase (file-one), one uppercase (FILE-TWO), the completion system will offer both as entries when trying to complete file, unless this setting is true applied.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "CASE_SENSITIVE",
        },
        {
          displayName: "Hyphen Sensitive",
          description: "Let hyphens and underscores be interchangeable",
          additionalDetails:
            "Only available if case sensitive completion is off",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          disabled: ({ config }) => config.CASE_SENSITIVE === true,
          name: "HYPHEN_INSENSITIVE",
        },
        {
          displayName: "Completion Waiting Dots",
          description:
            "Show ellipses after pressing tab while waiting for completions to load",
          type: "environmentVariable",
          interface: "toggle",
          default: true,
          name: "COMPLETION_WAITING_DOTS",
        },
        {
          displayName: "Hide Insecure Completions Warning",
          description:
            "Show a warning if sourcing completions from a potentially insecure folder which could contain malicious code.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "ZSH_DISABLE_COMPFIX",
        },
      ],
    },

    // Automatic title
    {
      displayName: "Window and Tab Title",
      description:
        "Customize the text displayed at the top of the terminal window and eah terminal tab",
      configuration: [
        {
          displayName: "Disable Auto Title",
          description:
            "Oh My Zsh automatically sets the title of your terminal and tabs when running a command or printing the prompt. Use this setting if you want to disable that.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "DISABLE_AUTO_TITLE",
        },
      ],
    },

    // Library settings
    {
      displayName: "Library Settings",
      // description: "",
      configuration: [
        {
          displayName: "Disable Magic Functions",
          description:
            "`bracketed-paste-magic` and `url-quote-magic` are two Zsh utilities that are known buggy in some Zsh versions or user setups. If you're having problems when pasting URLs or pasting anything at all, use this setting to disable them.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "DISABLE_MAGIC_FUNCTIONS",
        },
        {
          displayName: "Disable ls Colors",
          description:
            "Use this setting to disable the Oh My Zsh logic to automatically set `ls` color output based on the system you're running and which ls commands are available.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "DISABLE_LS_COLORS",
        },
        {
          displayName: "Enable Correction",
          description:
            "Tell Zsh to try to correct command names and filenames passed as arguments.",
          additionalDetails:
            "Only the following commands will be prevented to have filename correction: cp, ebuild, gist, heroku, hpodder, man, mkdir, mv, mysql, sudo.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "ENABLE_CORRECTION",
        },
        {
          displayName: "Disable Marking Untracked Files as Dirty",
          description:
            "Use this setting if you want to disable marking untracked files under VCS as dirty. This makes repository status checks for large repositories much, much faster.",
          type: "environmentVariable",
          interface: "toggle",
          default: false,
          name: "DISABLE_UNTRACKED_FILES_DIRTY",
        },
      ],
    },
    {
      displayName: "Additional Configuration",
      configuration: [
        {
          name: "additionalConfiguration",
          displayName: "Shell Code",
          description:
            "Blank space for you to provide additional shell code to be sourced before the Oh My Zsh plugin is sourced.",
          type: "script",
          interface: "text",
          default: "",
          // Take input and source it
          compile: (value) => value,
        },
      ],
    },

    // Folder Paths
    // {
    //   displayName: "Folder Paths",
    //   // description: "Paths for files and folders",
    //   configuration: [
    //     {
    //       displayName: "Path to Oh My Zsh Folder",
    //       description: "This is the $ZSH env variable. As this is part of the installation, Fig handles this for you and does not let you edit it.",
    //       type: "environmentVariable",
    //       interface: "text",
    //       default: "$FIG_PLUGIN_HOME/.oh-my-zsh",
    //       disabled: () => true,
    //       name: "ZSH",
    //     },
    //     {
    //       displayName: "Path to Custom Folder",
    //       description: "The custom folder is where custom plugins are installed and sourced",
    //       type: "environmentVariable",
    //       interface: "text",
    //       default: "$FIG_PLUGIN_HOME/.oh-my-zsh/custom",
    //       name: "ZSH_CUSTOM",
    //     },
    //     {
    //       displayName: "Path to Cache Folder",
    //       description: "The folder where plugin and completion spec cache data is stored",
    //       type: "environmentVariable",
    //       interface: "text",
    //       default: "$FIG_PLUGIN_HOME//.oh-my-zsh/cache",
    //       disabled: () => true,
    //       name: "ZSH_CACHE_DIR",
    //     },
    //   ]
    // },
  ],
};

export default plugin;

/* 
Todo: Brendan
Settings that are deliberately missing

* ZSH_COMPDUMP // path involves knowing fig variable

// can't source after an env variable has been sourced
* ZSH_THEME_TERM_TITLE_IDLE 
* ZSH_THEME_TERM_TAB_TITLE_IDLE



*/
