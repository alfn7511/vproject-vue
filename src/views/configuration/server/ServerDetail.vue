<template>
  <div class="animated fadeIn">
    <div class="collapse-title">
      <b-button class="btn-collapse" v-b-toggle.formDefault>
        <i class="fa"></i>
        기본정보
      </b-button>
    </div>

    <b-collapse id="formDefault" visible>
      <b-form class="formView" :validated="inValidForm" novalidate>
        <!-- Server Id -->
        <b-form-fieldset
          label="ID"
          :horizontal="true">
          <b-form-input
            :value="id"
            type="text"
            plaintext
          ></b-form-input>
        </b-form-fieldset>

        <!-- 구분 -->
        <b-form-fieldset
          label="구분"
          :horizontal="true">
          <b-form-input
            :value="items.componentTypeName"
            type="text"
            plaintext
          ></b-form-input>
        </b-form-fieldset>

        <!-- IP -->
        <b-form-fieldset
          label="IP"
          :horizontal="true">
          <b-form-input
            :value="items.ip"
            type="text"
            plaintext
          ></b-form-input>
        </b-form-fieldset>

        <!-- Host Name -->
        <b-form-fieldset
          label="Host Name"
          :horizontal="true">
          <b-form-input
            :value="items.hostName"
            type="text"
            plaintext
          ></b-form-input>
        </b-form-fieldset>

        <!-- PoP 선택 -->
        <b-form-fieldset
          :invalid-feedback="$valid.msg.select"
          :horizontal="true">
          <template slot="label">
            PoP 선택<i v-if="isEdit" class="require">*</i>
          </template>
          <multiselect
            v-if="isEdit"
            v-model="popId"
            track-by="popId"
            label="popName"
            :showLabels="false"
            :options="code.popId"
            :loading="isLoad.popId"
            :class="{'invalid': !valid.popId }"
            placeholder="Select PoP"
          ></multiselect>
          <b-form-input
            v-else
            :value="items.popName"
            type="text"
            plaintext
          ></b-form-input>
        </b-form-fieldset>

        <!-- 사용여부 -->
        <b-form-fieldset
          label="사용여부"
          :horizontal="true">
          <c-switch
            v-if="isEdit"
            type="text"
            class="v-switch"
            on="사용"
            off="미사용"
            v-model="items.serverUseYn"
          ></c-switch>
          <span
            v-else
            class="badge"
            :class="{'primary' : items.serverUseYn }"
          >{{ items.serverUseYn ? '사용' : '미사용' }}
          </span>
        </b-form-fieldset>

        <!-- 변경이력 -->
        <b-form-fieldset
          v-if="isEdit"
          label="변경이력<i class='require'>*</i>"
          :invalid-feedback="$valid.msg.require"
          :horizontal="true">
          <b-form-textarea
            v-model="items.modifyHistReason"
            :rows="6"
            required
          ></b-form-textarea>
        </b-form-fieldset>
      </b-form>
    </b-collapse>


    <!-- 처리이력 -->
    <div class="collapse-title" v-if="!isEdit">
      <b-button class="btn-collapse" v-b-toggle.formHistory>
        <i class="fa"></i>
        처리이력
      </b-button>
    </div>
    <b-collapse id="formHistory" visible v-if="!isEdit">
      <b-form class="formView">
        <div class="form-row">
          <!-- 등록일 -->
          <b-form-fieldset
            label="등록일시"
            :horizontal="true">
            <b-form-input
              :value="items.createDateTime"
              plaintext
              type="text"
            ></b-form-input>
          </b-form-fieldset>
          <!-- 등록자 -->
          <b-form-fieldset
            label="등록자"
            :horizontal="true">
            <b-form-input
              :value="items.createId"
              plaintext
              type="text"
            ></b-form-input>
          </b-form-fieldset>
        </div>

        <div class="form-row">
          <!-- 수정일 -->
          <b-form-fieldset
            label="수정일시"
            :horizontal="true">
            <b-form-input
              :value="items.modifyDateTime"
              plaintext
              type="text"
            ></b-form-input>
          </b-form-fieldset>
          <!-- 수정자 -->
          <b-form-fieldset
            label="수정자"
            :horizontal="true">
            <b-form-input
              :value="items.modifyId"
              plaintext
              type="text"
            ></b-form-input>
          </b-form-fieldset>
        </div>
      </b-form>
    </b-collapse>

    <div class="page-btn" v-if="isEdit">
      <b-button type="button" variant="outline-secondary" @click="onView">취소</b-button>
      <b-button type="button" variant="primary" @click="onSubmit">저장</b-button>
    </div>
    <div class="page-btn" v-else>
      <b-button type="button" variant="outline-secondary" class="float-left" @click="onDelete">삭제</b-button>
      <b-button type="button" variant="outline-secondary" @click="showHistory">이력관리</b-button>
      <b-button type="button" variant="outline-secondary" :to="{ name: 'Server 관리' }">목록</b-button>
      <b-button type="button" variant="primary" @click="onEdit">수정</b-button>
    </div>

    <!-- History Modal -->
    <b-modal size="lg" title="이력관리" v-model="isModalHistory">
      <section class="board">
        <b-table
          hover
          show-empty
          :items="history.items"
          :fields="history.fields"
          :current-page="history.pageInfo.page"
          :per-page="history.pageInfo.size"
        >
          <template slot="histMgmtId" slot-scope="row">
            <a :href="getHistoryLink(row.value)" target="_blank">보기</a>
          </template>
        </b-table>
      </section>

      <b-pagination
        v-model="history.pageInfo.page"
        :total-rows="history.pageInfo.totalCount"
        :per-page="history.pageInfo.size"
        class="mt-2"
      ></b-pagination>

      <div slot="modal-footer">
        <b-button type="button" variant="primary" @click="isModalHistory = false">확인</b-button>
      </div>
    </b-modal>

    <!-- Message Alert Modal -->
    <b-modal title="Message" size="sm" v-model="modal.open" :class="`modal-${modal.type}`">
      <div class="d-block text-center">
        <p>{{ modal.msg }}</p>
      </div>
      <div slot="modal-footer" class="mx-auto">
        <b-button type="button" variant="primary" @click="modal.action">확인</b-button>
        <b-button type="button" variant="outline-secondary" @click="modal.open = false">취소</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import cSwitch from '@/components/Switch'
  export default {
    name: 'server',
    props: ['id'],
    components: {
      cSwitch
    },

    data (){
      return {
        name: 'Server 상세',
        originItems: {},
        items: {
          serverId : null,
          componentTypeName: '',
          ip : null,
          hostName : null,
          popId: null,
          popName: '',
          serverUseYn : true
        },
        code: {
          popId: []
        },
        history: {
          fields: {
            createId: {label: '등록/수정자', 'class': 'text-left'},
            histBeginDateTime: {label: '등록/수정일시'},
            modifyHistReason: {label: '변경이력', 'class': 'text-left'},
            histMgmtId: {label: '보기'}
          },
          items: [],
          pageInfo: {
            page: 1,
            size: 10,
            totalCount: 1
          }
        },
        isLoad: {
          popId: true
        },
        isEdit: false,
        isModalHistory: false,

        modal: {
          open: false,
          type: 'done',
          msg: '',
          action (){}
        },

        inValidForm: false
      }
    },

    computed: {
      popId: {
        get () {
          return this.code.popId.find(obj => obj.popId === this.items.popId) || null;
        },
        set (newValue) {
          this.items.popId = newValue !== null ? newValue.popId : null;
        }
      },

      // validation
      valid (){
        return {
          popId: this.items.popId !== null
        }
      }
    },

    created (){
      // History
      const historyId = this.$route.query.histories;
      const detailUrl = historyId !== undefined ? `/servers/${this.id}/histories/${historyId}` : `/servers/${this.id}`;

      if (historyId){
        document.querySelector('body.app').classList.add('history-mode')
      }

      // PoP List
      this.$https.get('/pops')
        .then((res) => {
          this.isLoad.popId = false;
          this.code.popId = res.data.items;
        });

      // Detail Data
      this.$https.get(detailUrl)
        .then((res) => {
          this.items = res.data.items;
          this.originItems = JSON.parse(JSON.stringify(this.items));
        });
    },

    methods: {

      onEdit (){
        this.isEdit = true;
      },

      onView (){
        this.isEdit = false;
        this.items = JSON.parse(JSON.stringify(this.originItems));
      },

      onSubmit (){

        const { popId, serverUseYn, modifyHistReason } = this.items;
        const submitItems = { popId, serverUseYn, modifyHistReason };
        const validate = this.$valid.all(submitItems);

        this.inValidForm = !validate;

        if (validate){
          this.$https.put(`/servers/${this.id}`, { popId, serverUseYn, modifyHistReason })
            .then(() => {
              this.$router.go(this.$router.currentRoute);
            })
            .catch((error) => {
              console.log(error);
            });
        }

      },

      onDelete (){
        this.modal = {
          open: true,
          type: 'error',
          msg: '정말로 삭제하시겠습니까?',
          action: this.onDeleteData
        };
      },

      onDeleteData (){
        this.$https.delete(`/servers/${this.id}`)
          .then(() => {
            this.$router.push({ name: 'Server 관리' });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      getHistoryLink (rowId){
        return `#/configuration/server/${this.id}?histories=${rowId}`
      },

      showHistory () {
        this.isModalHistory = !this.isModalHistory;
        this.$https.get(`/servers/${this.id}/histories`)
          .then((res) => {
            this.history.items = res.data.items;
          });
      }
    }
  }
</script>
