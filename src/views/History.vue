<template>
  <div class="entries">
    <div class="dashProfile-cont">
      <AdminP />
      <AdminD />
    </div>
    <div class="dash-body-cont">
      <div class="entries-cont">
        <p class="entry-text">
          Entries -
          <span>
            <select name="" id="batches">
              <option value="">Batch 1</option>
              <option value="">Batch 2</option>
              <option value="">Batch 3</option>
            </select>
          </span>
        </p>
        <p class="entry-text-small">
          Comprises of all that applied for batch 2
        </p>
      </div>
      <div class="table-cont">
        <EntriesT />
      </div>
    </div>
  </div>
</template>

<script>
import EntriesT from "@/components/EntriesT.vue";
import AdminP from "@/components/AdminP.vue";
import AdminD from "@/components/AdminD.vue";

export default {
  name: "entries",
  components: {
    AdminP,
    AdminD,
    EntriesT,
  },
};
</script>

<style>
.entries {
  width: 100%;
  height: 120vh;
  display: flex;
}
.dashProfile-cont {
  width: 20%;
  height: 120vh;
}
.dash-body-cont {
  background: #fdfdff;

  width: 80%;
  height: 120vh;
}
.entries-cont {
  width: 85%;
  height: 205px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.entry-text {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
#batches {
  text-decoration: none;
  border: none;
  font-weight: 200;
}
select {
  background-color: #fdfdff;
}
.entry-text-small {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
}
.table-cont {
  width: 95%;
  height: 476px;
  background: #fdfdff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: auto;
}
</style>
