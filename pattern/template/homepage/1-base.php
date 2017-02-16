<?php /*
Container: false
*/ ?>

<?php printPattern('demo/header/base'); ?>


<div class="banner-widget banner-widget--under-header">
    <ul class="banner-widget__items">
        <li class="banner-widget__item bx-clone" data-sine-color="yellow">
            <img src="images/magento-white.svg" class="banner-widget__image">
            <h1 class="banner-widget__title">Banner 4</h1>
            <p class="banner-content">I'm a Magento certified developer from Staffordshire in the Uk.</p>
        </li>
    </ul>
</div>

<?php printPattern('demo/particle/base'); ?>

<br />
<hr />
FOOTER TO DO
<?php printPattern('demo/footer/base'); ?>


    <?php printPattern('component/drawer/left'); ?>

    <?php printPattern('component/drawer/right'); ?>

    <?php printPattern('component/modal/base'); ?>

    <?php printPattern('component/overlay/base'); ?>

<div class="modal" id="modal" data-cc-cascade="overlay" data-cc-trigger-on="direct-only" data-cc-action="deactivate" data-cc-target="modal">
    <div class="modal__dialog">

        <div id="modal-search" data-cc-cascade="modal" data-cc-group="modal-tabs" class="u-toggle">
            <div class="u-container-sm">
                <div>
                    <input type="search" class="input--large input--inverse input--emphasised h1" placeholder="E.g. Higgs Boson" />
                </div>
            </div>
        </div>
    </div>
</div>
