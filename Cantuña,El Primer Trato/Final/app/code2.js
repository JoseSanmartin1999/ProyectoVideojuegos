gdjs.PerdisteCode = {};
gdjs.PerdisteCode.localVariables = [];
gdjs.PerdisteCode.idToCallbackMap = new Map();
gdjs.PerdisteCode.GDNewSpriteObjects1= [];
gdjs.PerdisteCode.GDNewSpriteObjects2= [];
gdjs.PerdisteCode.GDNewSprite2Objects1= [];
gdjs.PerdisteCode.GDNewSprite2Objects2= [];
gdjs.PerdisteCode.GDNewTextObjects1= [];
gdjs.PerdisteCode.GDNewTextObjects2= [];
gdjs.PerdisteCode.GDJugadorObjects1= [];
gdjs.PerdisteCode.GDJugadorObjects2= [];
gdjs.PerdisteCode.GDVida2Objects1= [];
gdjs.PerdisteCode.GDVida2Objects2= [];
gdjs.PerdisteCode.GDScore2Objects1= [];
gdjs.PerdisteCode.GDScore2Objects2= [];
gdjs.PerdisteCode.GDTex_9595VidaObjects1= [];
gdjs.PerdisteCode.GDTex_9595VidaObjects2= [];
gdjs.PerdisteCode.GDTex_9595ScoreObjects1= [];
gdjs.PerdisteCode.GDTex_9595ScoreObjects2= [];
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects1= [];
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects2= [];
gdjs.PerdisteCode.GDCoinObjects1= [];
gdjs.PerdisteCode.GDCoinObjects2= [];
gdjs.PerdisteCode.GDPortalObjects1= [];
gdjs.PerdisteCode.GDPortalObjects2= [];
gdjs.PerdisteCode.GDLevitadoraObjects1= [];
gdjs.PerdisteCode.GDLevitadoraObjects2= [];
gdjs.PerdisteCode.GDDireccionadorObjects1= [];
gdjs.PerdisteCode.GDDireccionadorObjects2= [];
gdjs.PerdisteCode.GDDebilObjects1= [];
gdjs.PerdisteCode.GDDebilObjects2= [];
gdjs.PerdisteCode.GDTrampolinObjects1= [];
gdjs.PerdisteCode.GDTrampolinObjects2= [];
gdjs.PerdisteCode.GDDuendeObjects1= [];
gdjs.PerdisteCode.GDDuendeObjects2= [];
gdjs.PerdisteCode.GDInformacionObjects1= [];
gdjs.PerdisteCode.GDInformacionObjects2= [];
gdjs.PerdisteCode.GDCheckpointObjects1= [];
gdjs.PerdisteCode.GDCheckpointObjects2= [];


gdjs.PerdisteCode.asyncCallback10960668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PerdisteCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
gdjs.PerdisteCode.localVariables.length = 0;
}
gdjs.PerdisteCode.idToCallbackMap.set(10960668, gdjs.PerdisteCode.asyncCallback10960668);
gdjs.PerdisteCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PerdisteCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.PerdisteCode.asyncCallback10960668(runtimeScene, asyncObjectsList)), 10960668, asyncObjectsList);
}
}

}


};gdjs.PerdisteCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PerdisteCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PerdisteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PerdisteCode.GDNewSpriteObjects1.length = 0;
gdjs.PerdisteCode.GDNewSpriteObjects2.length = 0;
gdjs.PerdisteCode.GDNewSprite2Objects1.length = 0;
gdjs.PerdisteCode.GDNewSprite2Objects2.length = 0;
gdjs.PerdisteCode.GDNewTextObjects1.length = 0;
gdjs.PerdisteCode.GDNewTextObjects2.length = 0;
gdjs.PerdisteCode.GDJugadorObjects1.length = 0;
gdjs.PerdisteCode.GDJugadorObjects2.length = 0;
gdjs.PerdisteCode.GDVida2Objects1.length = 0;
gdjs.PerdisteCode.GDVida2Objects2.length = 0;
gdjs.PerdisteCode.GDScore2Objects1.length = 0;
gdjs.PerdisteCode.GDScore2Objects2.length = 0;
gdjs.PerdisteCode.GDTex_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDTex_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDTex_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDTex_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects2.length = 0;
gdjs.PerdisteCode.GDCoinObjects1.length = 0;
gdjs.PerdisteCode.GDCoinObjects2.length = 0;
gdjs.PerdisteCode.GDPortalObjects1.length = 0;
gdjs.PerdisteCode.GDPortalObjects2.length = 0;
gdjs.PerdisteCode.GDLevitadoraObjects1.length = 0;
gdjs.PerdisteCode.GDLevitadoraObjects2.length = 0;
gdjs.PerdisteCode.GDDireccionadorObjects1.length = 0;
gdjs.PerdisteCode.GDDireccionadorObjects2.length = 0;
gdjs.PerdisteCode.GDDebilObjects1.length = 0;
gdjs.PerdisteCode.GDDebilObjects2.length = 0;
gdjs.PerdisteCode.GDTrampolinObjects1.length = 0;
gdjs.PerdisteCode.GDTrampolinObjects2.length = 0;
gdjs.PerdisteCode.GDDuendeObjects1.length = 0;
gdjs.PerdisteCode.GDDuendeObjects2.length = 0;
gdjs.PerdisteCode.GDInformacionObjects1.length = 0;
gdjs.PerdisteCode.GDInformacionObjects2.length = 0;
gdjs.PerdisteCode.GDCheckpointObjects1.length = 0;
gdjs.PerdisteCode.GDCheckpointObjects2.length = 0;

gdjs.PerdisteCode.eventsList1(runtimeScene);
gdjs.PerdisteCode.GDNewSpriteObjects1.length = 0;
gdjs.PerdisteCode.GDNewSpriteObjects2.length = 0;
gdjs.PerdisteCode.GDNewSprite2Objects1.length = 0;
gdjs.PerdisteCode.GDNewSprite2Objects2.length = 0;
gdjs.PerdisteCode.GDNewTextObjects1.length = 0;
gdjs.PerdisteCode.GDNewTextObjects2.length = 0;
gdjs.PerdisteCode.GDJugadorObjects1.length = 0;
gdjs.PerdisteCode.GDJugadorObjects2.length = 0;
gdjs.PerdisteCode.GDVida2Objects1.length = 0;
gdjs.PerdisteCode.GDVida2Objects2.length = 0;
gdjs.PerdisteCode.GDScore2Objects1.length = 0;
gdjs.PerdisteCode.GDScore2Objects2.length = 0;
gdjs.PerdisteCode.GDTex_9595VidaObjects1.length = 0;
gdjs.PerdisteCode.GDTex_9595VidaObjects2.length = 0;
gdjs.PerdisteCode.GDTex_9595ScoreObjects1.length = 0;
gdjs.PerdisteCode.GDTex_9595ScoreObjects2.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects1.length = 0;
gdjs.PerdisteCode.GDPosicion_9595inicial_9595JugadorObjects2.length = 0;
gdjs.PerdisteCode.GDCoinObjects1.length = 0;
gdjs.PerdisteCode.GDCoinObjects2.length = 0;
gdjs.PerdisteCode.GDPortalObjects1.length = 0;
gdjs.PerdisteCode.GDPortalObjects2.length = 0;
gdjs.PerdisteCode.GDLevitadoraObjects1.length = 0;
gdjs.PerdisteCode.GDLevitadoraObjects2.length = 0;
gdjs.PerdisteCode.GDDireccionadorObjects1.length = 0;
gdjs.PerdisteCode.GDDireccionadorObjects2.length = 0;
gdjs.PerdisteCode.GDDebilObjects1.length = 0;
gdjs.PerdisteCode.GDDebilObjects2.length = 0;
gdjs.PerdisteCode.GDTrampolinObjects1.length = 0;
gdjs.PerdisteCode.GDTrampolinObjects2.length = 0;
gdjs.PerdisteCode.GDDuendeObjects1.length = 0;
gdjs.PerdisteCode.GDDuendeObjects2.length = 0;
gdjs.PerdisteCode.GDInformacionObjects1.length = 0;
gdjs.PerdisteCode.GDInformacionObjects2.length = 0;
gdjs.PerdisteCode.GDCheckpointObjects1.length = 0;
gdjs.PerdisteCode.GDCheckpointObjects2.length = 0;


return;

}

gdjs['PerdisteCode'] = gdjs.PerdisteCode;
