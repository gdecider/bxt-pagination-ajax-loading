<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */


$page = intval($arResult['NavPageNomer']);
$totalPages = intval($arResult['NavPageCount']);


if ($page < $totalPages) { ?>
     <div class="ix-more-link">
         <a href="<?= $APPLICATION->GetCurPageParam('PAGEN_'.$arResult["NavNum"].'=' . ($page + 1), ['PAGEN_'.$arResult["NavNum"], 'clear_cache']).(($_REQUEST['q'])?'&q='.$_REQUEST['q'] :'') ?>" data-total="<?=$totalPages?>">Показать еще</a>
     </div>
<? } ?>

