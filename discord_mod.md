---
layout: page
title: Discord za moderatorje
hidden: true
permalink: /discord_mod/
---
Tukaj je zbranih nekaj osnovnih akcij, ki jih imajo na voljo moderatorji
discord serverja.

<button class="active" data-show="android">Android</button><button data-show="ios">iOS</button><button data-show="browser">Brskalnik</button>
{: class="nav-buttons"}

## Dodajanje novih uporabnikov

<div class="android screenshot">
  <img src='{{"/assets/img/rules/mods/instant_invite_1.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/instant_invite_2.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/instant_invite_3.png" | relative_url}}'/>
</div>

<div class="ios screenshot">
Slike za iOS še niso na voljo
</div>

<div class="browser screenshot">
  <img src='{{"/assets/img/rules/mods/server_settings_1_browser.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/instant_invite_1_browser.png" | relative_url}}'/>
  <img style="height:50%" src='{{"/assets/img/rules/mods/instant_invite_2_browser.png" | relative_url}}'/>
  <img style="height:50%" src='{{"/assets/img/rules/mods/instant_invite_3_browser.png" | relative_url}}'/>
</div>


## Dodajanje vlog uporabnikom

<div class="android screenshot">
  <img src='{{"/assets/img/rules/mods/server_settings_1.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_settings_2.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_members.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_members_2.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/add_roles.png" | relative_url}}'/>
</div>

<div class="ios screenshot">
Slike za iOS še niso na voljo
</div>

<div class="browser screenshot">
  <img src='{{"/assets/img/rules/mods/server_settings_1_browser.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_settings_2_browser.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/add_roles_browser.png" | relative_url}}'/>
</div>

## Spreminjanje vzdevka uporabnikom

<div class="android screenshot">
  <img src='{{"/assets/img/rules/mods/server_settings_1.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_settings_2.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_members.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_members_2.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/change_nickname.png" | relative_url}}'/>
</div>


<div class="ios screenshot">
Slike za iOS še niso na voljo
</div>

<div class="browser screenshot">
  <img src='{{"/assets/img/rules/mods/server_settings_1_browser.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/server_settings_2_browser.png" | relative_url}}'/>
  <img src='{{"/assets/img/rules/mods/change_nickname_browser.png" | relative_url}}'/>
</div>

<script type="text/javascript">
  function changeDevice(event) {
    console.log(event);
    $('.nav-buttons button').removeClass("active");
    $(event.target).addClass("active");
    $(".screenshot").hide();
    $(".screenshot."+$(event.target).data("show")).show();

  }

  $('.nav-buttons button').on("click", changeDevice);
</script>
