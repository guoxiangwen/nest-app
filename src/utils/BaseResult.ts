export default class BaseResult<T> {
  public content: T;
  public message: string;
  public code: number;
  public success: boolean;

  public static ok<T>(content: T) {
    const result = new BaseResult<T>();
    result.success = true;
    result.content = content;
    return result;
  }

  public static error<T>(code: number, message: string) {
    const result = new BaseResult<T>();
    result.code = code;
    result.message = message;
    result.success = false;
    result.content = null;
    return result;
  }
}
