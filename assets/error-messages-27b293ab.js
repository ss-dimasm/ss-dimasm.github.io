const E={DEFAULT_SERVER_ERROR:"Something went wrong fetching data",DEFAULT_COMPONENT_ERROR:"Something went wrong with this component",FIELD_REQUIRED:"Required",FIELD_GENERAL_ERROR:e=>`Please enter a valid ${e||"value"}`,MINIMUM_CHARACTER_LENGTH:e=>`The minimum length is ${e} characters`,MAXIMUM_CHARACTER_LENGTH:e=>`The maximum length is ${e} characters`,MAXIMUM_DIGIT_LENGTH:e=>`The maximum length is ${e} digits`,WRONG_FILE_TYPE:e=>`Invalid file extension (must be ${e})`,EXCEEDED_MAX_FILE_SIZE:e=>`Image or document file cannot be larger than ${e}MB`,INVALID_INPUT_PATTERN:"Invalid pattern",SPECIFIC_INVALID_PATTERN:e=>`Invalid ${e}`,ONE_OF_FIELD_REQUIRED:"1 of this field is required",ONE_OF_SPECIFIC_FIELD_REQUIRED:e=>`At least one ${e} is required`,TYPE_ERROR:(e,t)=>`${t} must be a ${e}`,MUST_HIGHER_THAN:(e,t)=>`${e} must be higher than ${t}`,MUST_LOWER_THAN:(e,t)=>`${e} must be lower than ${t}`,DATA_NOT_FOUND:e=>`${e} not found`,BOTH_FIELD_REQUIRED:"Both fields are required",HIGHER_OR_EQUAL_THAN:(e,t)=>`${e} must be higher or equal than ${t}`,LOWER_OR_EQUAL_THAN:(e,t)=>`${e} must be lower or equal than ${t}`},n={NOT_FOUND:"We couldn't found the record on our database",TOO_MANY_REQUEST:"Try again later! the server received many request at this moment",REQUEST_TIMED_OUT:"Try again later! the request sent is timed out",E_TAG_NOT_VALID:"Unfortunately couldn't update the record! refresh your browser and try again",UNAUTHORIZED:"Your session is expired! redirecting to Login page",INVALID_PAYLOAD:"Some fields are not match with the server condition! kindly please check the form again",FORBIDDEN:"Don't have permission to do this action!",UNKNOWN_CLIENT_ERROR:"Something is not working from client side",SERVER_ERROR:"The server is down, couldn't do this action!",ERR_NETWORK:"Something wrong with your internet connection, please try again.",DEFAULT:"Error Occured!"};export{n as D,E};
