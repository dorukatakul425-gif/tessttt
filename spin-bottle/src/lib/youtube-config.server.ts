// =====================================================================
//  YOUTUBE API KEY
//  API anahtarınızı aşağıdaki tırnakların içine yapıştırın.
//  (İsterseniz bunun yerine YOUTUBE_API_KEY ortam değişkenini kullanın.)
//  Bu dosya yalnızca sunucuda çalışır, tarayıcıya gönderilmez.
// =====================================================================
const YOUTUBE_API_KEY_IN_FILE = "";

export function getYouTubeApiKey(): string {
  return process.env["YOUTUBE_API_KEY"] || YOUTUBE_API_KEY_IN_FILE;
}
