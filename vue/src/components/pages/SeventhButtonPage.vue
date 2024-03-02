<template>
  <div>
    <SeventhButton/>
    <SeventhButton type="primary">
      PRIMARY
    </SeventhButton>

    <SeventhButton type="info">
      INFO
    </SeventhButton>

    <SeventhButton type="success">
      SUCCESS
    </SeventhButton>

    <SeventhButton type="warning">
      WARNING
    </SeventhButton>

    <SeventhButton type="danger">
      DANGER
    </SeventhButton>

  </div>
</template>

<script>
import SeventhButton from "@/components/ui/buttons/SeventhButton";

export default {
  components: {
    SeventhButton
  }
}
</script>
