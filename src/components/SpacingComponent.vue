<template>
  <div>
    <div class="outer-box">
      <div class="grid-3x3 margin-box">
        <!-- Top Row -->
        <div></div>
        <div>
          <SpacingDropdown :value="margins.top" side="top" @updateMargins="handleMarginUpdate" />
        </div>
        <div></div>

        <!-- Center Row -->
        <div>
          <SpacingDropdown :value="margins.left" side="left" @updateMargins="handleMarginUpdate" />
        </div>
        <div class="padding-box">
          <div class="grid-3x3 padding-grid">
            <div></div>
            <SpacingDropdown
              :value="paddings.top"
              side="top"
              @updateMargins="handlePaddingUpdate"
            />
            <div></div>

            <SpacingDropdown :value="paddings.left" side="left" />
            <div class="input-wrapper"></div>
            <SpacingDropdown :value="paddings.right" side="right" />

            <div></div>
            <SpacingDropdown :value="paddings.bottom" side="bottom" />
            <div></div>
          </div>
          <div class="padding-label">Paddings</div>
        </div>
        <div>
          <SpacingDropdown
            :value="margins.right"
            side="right"
            @updateMargins="handleMarginUpdate"
          />
        </div>

        <!-- Bottom Row -->
        <div></div>
        <div>
          <SpacingDropdown
            :value="margins.bottom"
            side="bottom"
            @updateMargins="handleMarginUpdate"
          />
        </div>
        <div></div>
      </div>
      <div class="margin-label">Margins</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpacingDropdown from './SpacingDropdown.vue'
import {
  margins,
  paddings,
  handleMarginUpdate,
  handlePaddingUpdate,
} from '../shared/spacingBusLogic'
</script>

<style scoped>
.outer-box {
  position: relative;
  background: #f8fafb;
  border: 1px solid #e2e5e6;
  border-radius: 5px;
  width: 525px;
  height: 205px;
  padding: 8px;
}

.margin-box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.padding-box {
  position: relative;
  background: #1a73e80d;
  border: 1px solid #1a73e8;
  border-radius: 5px;
  width: 405px;
  height: 135px;
  padding: 8px;
}

.padding-grid {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.margin-label,
.padding-label {
  position: absolute;
  top: 8px;
  left: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0%;
  color: #485350;
}

.input-wrapper {
  width: 213px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
}
</style>
