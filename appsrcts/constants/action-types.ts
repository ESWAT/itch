
// run upgrade operations
export const PREBOOT = "PREBOOT";

// actually start the app
export const BOOT = "BOOT";
export const FIRST_USEFUL_PAGE = "FIRST_USEFUL_PAGE";

// Chromium is good at retrieving the user's language from the innards of the OS
// doing the same from nodejs would probably be a waste of everyone's time
export const LANGUAGE_SNIFFED = "LANGUAGE_SNIFFED";
export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const MODAL_CLOSED = "MODAL_CLOSED";
export const MODAL_RESPONSE = "MODAL_RESPONSE";

export const SETUP_STATUS = "SETUP_STATUS";
export const SETUP_DONE = "SETUP_DONE";
export const RETRY_SETUP = "RETRY_SETUP";

export const SESSION_READY = "SESSION_READY";
export const SESSIONS_REMEMBERED = "SESSIONS_REMEMBERED";
export const SESSION_UPDATED = "SESSION_UPDATED";
export const FORGET_SESSION_REQUEST = "FORGET_SESSION_REQUEST";
export const FORGET_SESSION = "FORGET_SESSION";

export const START_ONBOARDING = "START_ONBOARDING";
export const EXIT_ONBOARDING = "EXIT_ONBOARDING";

export const GLOBAL_DB_COMMIT = "GLOBAL_DB_COMMIT";
export const GLOBAL_DB_READY = "GLOBAL_DB_READY";
export const GLOBAL_DB_CLOSED = "GLOBAL_DB_CLOSED";

export const USER_DB_COMMIT = "USER_DB_COMMIT";
export const USER_DB_READY = "USER_DB_READY";
export const USER_DB_CLOSED = "USER_DB_CLOSED";

/* Background stuff */
export const DISMISS_HISTORY_ITEM = "DISMISS_HISTORY_ITEM";
export const QUEUE_HISTORY_ITEM = "QUEUE_HISTORY_ITEM";
export const HISTORY_READ = "HISTORY_READ";

/* Main window events */
export const FIRST_WINDOW_READY = "FIRST_WINDOW_READY";
export const WINDOW_READY = "WINDOW_READY";
export const WINDOW_DESTROYED = "WINDOW_DESTROYED";
export const WINDOW_FOCUS_CHANGED = "WINDOW_FOCUS_CHANGED";
export const WINDOW_FULLSCREEN_CHANGED = "WINDOW_FULLSCREEN_CHANGED";
export const WINDOW_BOUNDS_CHANGED = "WINDOW_BOUNDS_CHANGED";
export const CREATE_WINDOW = "CREATE_WINDOW";
export const FOCUS_WINDOW = "FOCUS_WINDOW";
export const HIDE_WINDOW = "HIDE_WINDOW";
export const CLOSE_TAB_OR_AUX_WINDOW = "CLOSE_TAB_OR_AUX_WINDOW";
export const CLOSE_ALL_TABS = "CLOSE_ALL_TABS";

/* Navigation */
export const NAVIGATE = "NAVIGATE";
export const FOCUS_NTH_TAB = "FOCUS_NTH_TAB";
export const MOVE_TAB = "MOVE_TAB";
export const EVOLVE_TAB = "EVOLVE_TAB";
export const TAB_EVOLVED = "TAB_EVOLVED";
export const NEW_TAB = "NEW_TAB";
export const CLOSE_TAB = "CLOSE_TAB";
export const SHOW_PREVIOUS_TAB = "SHOW_PREVIOUS_TAB";
export const SHOW_NEXT_TAB = "SHOW_NEXT_TAB";
export const SWITCH_PAGE = "SWITCH_PAGE";
export const OPEN_URL = "OPEN_URL";
export const REPORT_ISSUE = "REPORT_ISSUE";
export const COPY_TO_CLIPBOARD = "COPY_TO_CLIPBOARD";
export const HANDLE_ITCHIO_URL = "HANDLE_ITCHIO_URL";
export const TRIGGER_MAIN_ACTION = "TRIGGER_MAIN_ACTION";
export const TRIGGER_OK = "TRIGGER_OK";
export const TRIGGER_BACK = "TRIGGER_BACK";
export const TRIGGER_LOCATION = "TRIGGER_LOCATION";

export const SHORTCUTS_VISIBILITY_CHANGED = "SHORTCUTS_VISIBILITY_CHANGED";
export const TOGGLE_MINI_SIDEBAR = "TOGGLE_MINI_SIDEBAR";

export const TAB_RELOADED = "TAB_RELOADED";
export const TAB_CHANGED = "TAB_CHANGED";
export const TABS_CHANGED = "TABS_CHANGED";
export const TABS_RESTORED = "TABS_RESTORED";
export const TAB_DATA_FETCHED = "TAB_DATA_FETCHED";

export const OPEN_TAB_CONTEXT_MENU = "OPEN_TAB_CONTEXT_MENU";
export const UNLOCK_TAB = "UNLOCK_TAB";

/* Menu */
export const REFRESH_MENU = "REFRESH_MENU";

/** Buh-bye */
export const PREPARE_QUIT = "PREPARE_QUIT";
export const QUIT = "QUIT";
export const QUIT_WHEN_MAIN = "QUIT_WHEN_MAIN";
export const QUIT_ELECTRON_APP = "QUIT_ELECTRON_APP";
export const QUIT_AND_INSTALL = "QUIT_AND_INSTALL";

/* Self updates */
export const CHECK_FOR_SELF_UPDATE = "CHECK_FOR_SELF_UPDATE";
export const CHECKING_FOR_SELF_UPDATE = "CHECKING_FOR_SELF_UPDATE";
export const SELF_UPDATE_AVAILABLE = "SELF_UPDATE_AVAILABLE";
export const SELF_UPDATE_NOT_AVAILABLE = "SELF_UPDATE_NOT_AVAILABLE";
export const SELF_UPDATE_ERROR = "SELF_UPDATE_ERROR";
export const SELF_UPDATE_DOWNLOADED = "SELF_UPDATE_DOWNLOADED";
export const SHOW_AVAILABLE_SELF_UPDATE = "SHOW_AVAILABLE_SELF_UPDATE";
export const APPLY_SELF_UPDATE = "APPLY_SELF_UPDATE";
export const APPLY_SELF_UPDATE_REQUEST = "APPLY_SELF_UPDATE_REQUEST";
export const SNOOZE_SELF_UPDATE = "SNOOZE_SELF_UPDATE";
export const DISMISS_STATUS = "DISMISS_STATUS";

export const STATUS_MESSAGE = "STATUS_MESSAGE";
export const DISMISS_STATUS_MESSAGE = "DISMISS_STATUS_MESSAGE";

export const ENABLE_BONUS = "ENABLE_BONUS";
export const DISABLE_BONUS = "DISABLE_BONUS";

/* Locales */
export const LOCALES_CONFIG_LOADED = "LOCALES_CONFIG_LOADED";
export const QUEUE_LOCALE_DOWNLOAD = "QUEUE_LOCALE_DOWNLOAD";
export const LOCALE_DOWNLOAD_STARTED = "LOCALE_DOWNLOAD_STARTED";
export const LOCALE_DOWNLOAD_ENDED = "LOCALE_DOWNLOAD_ENDED";

/* Install locations */
export const BROWSE_INSTALL_LOCATION = "BROWSE_INSTALL_LOCATION";
export const ADD_INSTALL_LOCATION_REQUEST = "ADD_INSTALL_LOCATION_REQUEST";
export const ADD_INSTALL_LOCATION = "ADD_INSTALL_LOCATION";
export const REMOVE_INSTALL_LOCATION_REQUEST = "REMOVE_INSTALL_LOCATION_REQUEST";
export const REMOVE_INSTALL_LOCATION = "REMOVE_INSTALL_LOCATION";
export const MAKE_INSTALL_LOCATION_DEFAULT = "MAKE_INSTALL_LOCATION_DEFAULT";
export const QUERY_FREE_SPACE = "QUERY_FREE_SPACE";
export const FREE_SPACE_UPDATED = "FREE_SPACE_UPDATED";

/* Tasks */
export const TASK_STARTED = "TASK_STARTED";
export const TASK_PROGRESS = "TASK_PROGRESS";
export const TASK_ENDED = "TASK_ENDED";

export const ABORT_TASK = "ABORT_TASK";

/* Downloads */
export const QUEUE_DOWNLOAD = "QUEUE_DOWNLOAD";
export const DOWNLOAD_STARTED = "DOWNLOAD_STARTED";
export const DOWNLOAD_PROGRESS = "DOWNLOAD_PROGRESS";
export const DOWNLOAD_ENDED = "DOWNLOAD_ENDED";

export const CLEAR_FINISHED_DOWNLOADS = "CLEAR_FINISHED_DOWNLOADS";

export const PRIORITIZE_DOWNLOAD = "PRIORITIZE_DOWNLOAD";
export const CANCEL_DOWNLOAD = "CANCEL_DOWNLOAD";
export const PAUSE_DOWNLOADS = "PAUSE_DOWNLOADS";
export const RESUME_DOWNLOADS = "RESUME_DOWNLOADS";
export const RETRY_DOWNLOAD = "RETRY_DOWNLOAD";
export const CLEAR_GAME_DOWNLOADS = "CLEAR_GAME_DOWNLOADS";

export const DOWNLOAD_SPEED_DATAPOINT = "DOWNLOAD_SPEED_DATAPOINT";

/** User requested game to be uninstalled */
export const REQUEST_CAVE_UNINSTALL = "REQUEST_CAVE_UNINSTALL";
/** Cave is going to be uninstalled */
export const QUEUE_CAVE_UNINSTALL = "QUEUE_CAVE_UNINSTALL";
/** Cave is going to be reinstalled */
export const QUEUE_CAVE_REINSTALL = "QUEUE_CAVE_REINSTALL";
/** Kaboom! */
export const IMPLODE_CAVE = "IMPLODE_CAVE";
/** I changed my mind */
export const CANCEL_CAVE = "CANCEL_CAVE";
/** Bye bye. */
export const CAVE_THROWN_INTO_BIT_BUCKET = "CAVE_THROWN_INTO_BIT_BUCKET";
/** i spy, i spy */
export const EXPLORE_CAVE = "EXPLORE_CAVE";
/** Alright, what broke this time? */
export const PROBE_CAVE = "PROBE_CAVE";
/** Let the others figure it out */
export const REPORT_CAVE = "REPORT_CAVE";
/** Won't compromise on that */
export const SHOW_PACKAGING_POLICY = "SHOW_PACKAGING_POLICY";
/** A game has been interacted with! */
export const RECORD_GAME_INTERACTION = "RECORD_GAME_INTERACTION";

export const ABORT_GAME_REQUEST = "ABORT_GAME_REQUEST";
export const ABORT_LAST_GAME = "ABORT_LAST_GAME";
export const ABORT_GAME = "ABORT_GAME";

export const CHECK_FOR_GAME_UPDATE = "CHECK_FOR_GAME_UPDATE";
export const CHECK_FOR_GAME_UPDATES = "CHECK_FOR_GAME_UPDATES";

/** User requested game to be installed */
export const QUEUE_GAME = "QUEUE_GAME";

/** Open a game's page */
export const BROWSE_GAME = "BROWSE_GAME";

/** Buy / support something! */
export const INITIATE_PURCHASE = "INITIATE_PURCHASE";
export const PURCHASE_COMPLETED = "PURCHASE_COMPLETED";
export const ENCOURAGE_GENEROSITY = "ENCOURAGE_GENEROSITY";

export const INITIATE_SHARE = "INITIATE_SHARE";

/** macOS-only, bounce dock */
export const BOUNCE = "BOUNCE";
/** Cross-platform, notification bubble */
export const NOTIFY = "NOTIFY";
export const NOTIFY_HTML5 = "NOTIFY_HTML5";

/** Search */
export const FOCUS_SEARCH = "FOCUS_SEARCH";
export const FOCUS_FILTER = "FOCUS_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SEARCH_QUERY_CHANGED = "SEARCH_QUERY_CHANGED";
export const SEARCH = "SEARCH";
export const SEARCH_FETCHED = "SEARCH_FETCHED";
export const SEARCH_STARTED = "SEARCH_STARTED";
export const SEARCH_FINISHED = "SEARCH_FINISHED";
export const CLOSE_SEARCH = "CLOSE_SEARCH";
export const SEARCH_HIGHLIGHT_OFFSET = "SEARCH_HIGHLIGHT_OFFSET";

export const FILTER_CHANGED = "FILTER_CHANGED";
export const BINARY_FILTER_CHANGED = "BINARY_FILTER_CHANGED";

/** Data retrieval */
export const FETCH_COLLECTION_GAMES = "FETCH_COLLECTION_GAMES";
export const COLLECTION_GAMES_FETCHED = "COLLECTION_GAMES_FETCHED";

/** Start picking from a list of remembered sessions */
export const LOGIN_START_PICKING = "LOGIN_START_PICKING";
/** Go back to username/password form to add new login */
export const LOGIN_STOP_PICKING = "LOGIN_STOP_PICKING";

/** Any login attempt (cached or not) */
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
/** Private - login attempt with username/password */
export const LOGIN_WITH_PASSWORD = "LOGIN_WITH_PASSWORD";
/** Private - login attempt with stored token */
export const LOGIN_WITH_TOKEN = "LOGIN_WITH_TOKEN";
/** Wrong login/password or something else */
export const LOGIN_FAILED = "LOGIN_FAILED";
/** API key available beyond this point */
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
/** market available beyond this point */
export const READY_TO_ROLL = "READY_TO_ROLL";
/** install locations available beyond this point */
export const LOCATIONS_READY = "LOCATIONS_READY";
/** Asked to log out */
export const CHANGE_USER = "CHANGE_USER";
/** Confirmed log out */
export const LOGOUT = "LOGOUT";

/** Sent from metal when needs to eval something in chrome. Example: HTML5 Notification API */
export const EVAL = "EVAL";

/** Sent when app is about to reboot or shutdown */
export const IMPLODE_APP = "IMPLODE_APP";

/** GC unused database entries */
export const GC_DATABASE = "GC_DATABASE";

/* Preferences */
export const OPEN_PREFERENCES = "OPEN_PREFERENCES";
export const PREFERENCES_SET_LANGUAGE = "PREFERENCES_SET_LANGUAGE";
export const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";

export const VIEW_CREATOR_PROFILE = "VIEW_CREATOR_PROFILE";
export const VIEW_COMMUNITY_PROFILE = "VIEW_CREATOR_PROFILE";
