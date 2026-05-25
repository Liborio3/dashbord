export function predictBot(followers){
    if(followers<50){
        return "Bot";
    }
    return "Humano";
}