<template>
  <div>
    <h1>Programs</h1>
    <table>
      <thead>
        <tr>
          <th>Program Name</th>
          <th>Location</th>
          <th>Period</th>
          <th>Program Description</th>
          <th>Image URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="program" v-for="program in programs" :key="program.id">
          <td>{{ program.ProgramName }}</td>
          <td>{{ program.Location }}</td>
          <td>{{ program.Period }}</td>
          <td>{{ program.ProgramDescription }}</td>
          <td>{{ program.imgURL }}</td>
          <td>
            <button @click="editProduct(program)">Edit</button>
            <button @click="deleteProduct(program)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="showAddModal()">Add Program</button>
    <div v-if="showModal">
      <h2>{{ modalTitle }}</h2>
      <form @submit.prevent="submitForm">
        <label for="program-name">Program Name:</label>
        <input id="program-name" v-model="form.ProgramName" required />
        <label for="location">Location:</label>
        <input id="location" v-model="form.Location" required />
        <label for="period">Period:</label>
        <input id="period" v-model="form.Period" required />
        <label for="program-description">Program Description:</label>
        <textarea id="program-description" v-model="form.ProgramDescription" required></textarea>
        <label for="img-url">Image URL:</label>
        <input id="img-url" v-model="form.imgURL" required />
        <button type="submit">{{ modalAction }}</button>
        <button type="button" @click="cancelForm">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    programs() {
      return this.$store.state.programs;
    }
  },
  data() {
    return {
      showModal: false,
      modalTitle: "",
      modalAction: "",
      form: {
        ProgramName: "",
        Location: "",
        Period: "",
        ProgramDescription: "",
        imgURL: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchPrograms");
  },
  methods: {
    showAddModal() {
      this.modalTitle = "Add Program";
      this.modalAction = "Add";
      this.showModal = true;
    },
    showEditModal(program) {
      this.modalTitle = "Edit Program";
      this.modalAction = "Update";
      this.form = { ...program };
      this.showModal = true;
    },
    submitForm() {
      if (this.modalAction === "Add") {
        this.$store.dispatch("createProgram", this.form);
      } else if (this.modalAction === "Update") {
        this.$store.dispatch("updateProgram", this.form);
      }
      this.showModal = false;
    },
    cancelForm() {
      this.showModal = false;
    },
    deleteProduct(program) {
      if (confirm("Are you sure you want to delete this program?")) {
        this.$store.dispatch("deleteProgram", program);
      }
    },
  },
};
</script>
