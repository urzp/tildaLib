// show popaps #moreSize

t1093__processCurrentPopupOnShow('#moreSize')

t702_showPopup(getIdPupap('#moreSize'))
t702_closePopup(getIdPupap('#moreSize'))
t390_showPopup(getIdPupap('#moreSize'))


function getIdPupap(name){
    let id = $(`[data-tooltip-hook="${name}"]`).parent().parent().attr('id')
    return id.split('rec')[1]
}